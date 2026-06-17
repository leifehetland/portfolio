// Adds the typed `meta` frontmatter export to imported MDX modules. This merges
// with the default Body component export declared by @types/mdx ("*.mdx"), so
// project content stays fully typed (see src/lib/projects.ts).
declare module "*.mdx" {
  export const meta: import("@/lib/projects").ProjectMeta;
}
