export type ProjectCategory = "Full Stack" | "Shopify" | "WordPress" | "Data";

export interface Project {
  slug: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: ProjectCategory;
  created: string;
  role: string;
}

