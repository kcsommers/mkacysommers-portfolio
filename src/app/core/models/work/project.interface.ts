import { IProjectSection } from './project-section.interface';

export interface IProject {
  title: string;
  param: string;
  blurb: string;
  tools: string[];
  coverImage: string;
  links: {
    github: string;
    site: string;
  };
  sections: IProjectSection[];
  roles?: string[];
}
