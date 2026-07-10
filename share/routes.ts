/** Section ids used for in-page navigation + scroll spy. Order defines the
 *  order sections appear in the navbar. */
export const SECTIONS = [
  "home",
  "about",
  "skills",
  "experience",
  "projects",
  "ai",
  "github",
  "education",
  "contact",
] as const;

export type SectionId = (typeof SECTIONS)[number];
