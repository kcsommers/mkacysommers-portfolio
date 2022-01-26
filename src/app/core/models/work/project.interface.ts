export interface IProject {
  title: string;
  snippet: string;
  description: string;
  tools: string[];
  images: string[];
  links: {
    github: string;
    site: string;
  };
}
