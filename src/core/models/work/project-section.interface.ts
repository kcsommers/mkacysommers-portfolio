export interface IProjectSection {
  text?: {
    content: string;
    styles?: { [style: string]: string };
  };
  images?: string[];
}
