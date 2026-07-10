import "server-only";
import type {
  ContributionCalendar,
  ContributionDay,
  GitHubData,
  GitHubProfile,
  GitHubRepo,
  LanguageStat,
} from "@/share/types";

const USERNAME = process.env.GITHUB_USERNAME || "Hawdeeed";
const TOKEN = process.env.GITHUB_TOKEN;
const REST = "https://api.github.com";
const GRAPHQL = "https://api.github.com/graphql";

/** Canonical language → brand colour map (GitHub linguist palette). */
const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: "#3178C6",
  JavaScript: "#F7DF1E",
  Python: "#3776AB",
  "C++": "#F34B7D",
  C: "#555555",
  HTML: "#E34C26",
  CSS: "#563D7C",
  Java: "#B07219",
  Shell: "#89E051",
  Jupyter: "#DA5B0B",
  "Jupyter Notebook": "#DA5B0B",
  Dockerfile: "#384D54",
  SCSS: "#C6538C",
  Go: "#00ADD8",
  Rust: "#DEA584",
  PHP: "#4F5D95",
  Ruby: "#701516",
  Vue: "#41B883",
  Dart: "#00B4AB",
  Kotlin: "#A97BFF",
  Swift: "#F05138",
  MDX: "#FCB32C",
};

function colorFor(language: string | null): string {
  if (!language) return "#8B949E";
  return LANGUAGE_COLORS[language] ?? "#8B949E";
}

function headers(extra?: Record<string, string>): HeadersInit {
  const h: Record<string, string> = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
    "User-Agent": "hadeed-portfolio",
    ...extra,
  };
  if (TOKEN) h.Authorization = `Bearer ${TOKEN}`;
  return h;
}

async function fetchProfile(): Promise<GitHubProfile> {
  const res = await fetch(`${REST}/users/${USERNAME}`, {
    headers: headers(),
    next: { revalidate: 3600 },
  });
  if (!res.ok) throw new Error(`GitHub profile fetch failed: ${res.status}`);
  const d = await res.json();
  return {
    login: d.login,
    name: d.name,
    avatarUrl: d.avatar_url,
    bio: d.bio,
    followers: d.followers,
    following: d.following,
    publicRepos: d.public_repos,
    createdAt: d.created_at,
    htmlUrl: d.html_url,
    location: d.location,
    company: d.company,
  };
}

async function fetchRepos(): Promise<GitHubRepo[]> {
  const repos: GitHubRepo[] = [];
  // paginate up to 3 pages (300 repos) — plenty for a personal account
  for (let page = 1; page <= 3; page++) {
    const res = await fetch(
      `${REST}/users/${USERNAME}/repos?per_page=100&sort=updated&page=${page}`,
      { headers: headers(), next: { revalidate: 3600 } },
    );
    if (!res.ok) break;
    const batch = await res.json();
    if (!Array.isArray(batch) || batch.length === 0) break;
    for (const d of batch) {
      repos.push({
        id: d.id,
        name: d.name,
        description: d.description,
        htmlUrl: d.html_url,
        homepage: d.homepage,
        language: d.language,
        stars: d.stargazers_count,
        forks: d.forks_count,
        watchers: d.watchers_count,
        openIssues: d.open_issues_count,
        topics: d.topics ?? [],
        updatedAt: d.updated_at,
        createdAt: d.created_at,
        isFork: d.fork,
        isArchived: d.archived,
      });
    }
    if (batch.length < 100) break;
  }
  return repos;
}

/** GraphQL contribution calendar. Requires a token; returns null without one. */
async function fetchContributions(): Promise<ContributionCalendar | null> {
  if (!TOKEN) return null;
  const query = `
    query ($login: String!) {
      user(login: $login) {
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays { date contributionCount contributionLevel }
            }
          }
        }
      }
    }`;
  try {
    const res = await fetch(GRAPHQL, {
      method: "POST",
      headers: headers({ "Content-Type": "application/json" }),
      body: JSON.stringify({ query, variables: { login: USERNAME } }),
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    const json = await res.json();
    const cal =
      json?.data?.user?.contributionsCollection?.contributionCalendar;
    if (!cal) return null;
    const levelMap: Record<string, ContributionDay["level"]> = {
      NONE: 0,
      FIRST_QUARTILE: 1,
      SECOND_QUARTILE: 2,
      THIRD_QUARTILE: 3,
      FOURTH_QUARTILE: 4,
    };
    const weeks: ContributionDay[][] = cal.weeks.map((w: any) =>
      w.contributionDays.map((day: any) => ({
        date: day.date,
        count: day.contributionCount,
        level: levelMap[day.contributionLevel] ?? 0,
      })),
    );
    return { totalContributions: cal.totalContributions, weeks };
  } catch {
    return null;
  }
}

function computeLanguages(repos: GitHubRepo[]): LanguageStat[] {
  const counts = new Map<string, number>();
  for (const r of repos) {
    if (r.isFork || !r.language) continue;
    counts.set(r.language, (counts.get(r.language) ?? 0) + 1);
  }
  const total = Array.from(counts.values()).reduce((a, b) => a + b, 0) || 1;
  return Array.from(counts.entries())
    .map(([name, count]) => ({
      name,
      count,
      percentage: Math.round((count / total) * 100),
      color: colorFor(name),
    }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 8);
}

/** Fetch + assemble the complete GitHub dataset. Throws only if the profile
 *  itself can't be loaded; sub-fetches degrade gracefully. */
export async function getGitHubData(): Promise<GitHubData> {
  const [profile, repos, contributions] = await Promise.all([
    fetchProfile(),
    fetchRepos(),
    fetchContributions(),
  ]);

  const ownRepos = repos.filter((r) => !r.isFork && !r.isArchived);
  const stars = ownRepos.reduce((sum, r) => sum + r.stars, 0);
  const forks = ownRepos.reduce((sum, r) => sum + r.forks, 0);
  const yearsOnGitHub = Math.max(
    1,
    Math.round(
      (Date.now() - new Date(profile.createdAt).getTime()) /
        (1000 * 60 * 60 * 24 * 365),
    ),
  );

  const topRepos = [...ownRepos]
    .sort((a, b) => b.stars - a.stars || b.forks - a.forks || +new Date(b.updatedAt) - +new Date(a.updatedAt))
    .slice(0, 6);

  return {
    profile,
    repos: ownRepos,
    topRepos,
    languages: computeLanguages(ownRepos),
    totals: {
      stars,
      forks,
      repos: profile.publicRepos,
      yearsOnGitHub,
    },
    contributions,
    fetchedAt: new Date().toISOString(),
  };
}
