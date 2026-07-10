"use client";

import { useEffect, useState } from "react";
import type { GitHubData } from "@/share/types";

type State =
  | { status: "loading"; data: null; error: null }
  | { status: "success"; data: GitHubData; error: null }
  | { status: "error"; data: null; error: string };

/** Client-side fetcher for the cached /api/github endpoint. */
export function useGitHub(): State {
  const [state, setState] = useState<State>({
    status: "loading",
    data: null,
    error: null,
  });

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch("/api/github");
        if (!res.ok) throw new Error(`Request failed (${res.status})`);
        const data = (await res.json()) as GitHubData;
        if (!cancelled) setState({ status: "success", data, error: null });
      } catch (err) {
        if (!cancelled)
          setState({
            status: "error",
            data: null,
            error: err instanceof Error ? err.message : "Failed to load",
          });
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return state;
}
