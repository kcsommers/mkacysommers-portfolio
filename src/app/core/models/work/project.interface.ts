export interface IProject {
  title: string;
  param: string;
  blurb: string;
  description: string;
  tools: string[];
  images: string[];
  links: {
    github: string;
    site: string;
  };
}
