import { NextResponse } from "next/server";
import { getGitHubData } from "@/lib/github";

// Render per-request (reads current env for the token) while the individual
// upstream GitHub REST/GraphQL calls are cached for an hour at the data layer
// (see `next: { revalidate: 3600 }` in lib/github.ts). Best of both: always
// uses live credentials, never hammers the GitHub API.
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const data = await getGitHubData();
    return NextResponse.json(data, {
      headers: {
        "Cache-Control":
          "public, s-maxage=3600, stale-while-revalidate=86400",
      },
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to load GitHub data";
    // 502 signals an upstream (GitHub) failure — the client shows an error state.
    return NextResponse.json({ error: message }, { status: 502 });
  }
}
