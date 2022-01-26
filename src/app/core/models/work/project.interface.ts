export interface IProject {
  title: string;
  blurb: string;
  description: string;
  tools: string[];
  images: string[];
  links: {
    github: string;
    site: string;
  };
}
