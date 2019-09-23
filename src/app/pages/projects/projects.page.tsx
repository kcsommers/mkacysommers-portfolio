import LazyLoadedImage from 'app/lib/components/lazy-loaded-image/lazy-loaded-image.component';
import { TextComponent } from 'app/lib/components/text/text.component';
import { ImageFolders } from 'app/lib/core/ImageFolders.enum';
import { Project, projects } from 'app/lib/core/projects';
import React from 'react';
import styles from './projects.module.scss';


type ProjectsPageProps = {
  match: any
}
type ProjectsPageState = {
  project: Project | undefined
}

export class ProjectsPage extends React.Component<ProjectsPageProps, ProjectsPageState> {
  constructor(props: ProjectsPageProps) {
    super(props);
    this.state = {
      project: undefined
    }
  }
  componentDidMount() {
    const projectName = this.props.match.params.name;
    const project = projects.find(p => p.title === projectName) as Project;
    this.setState({ project })
  }
  render() {
    const { project } = this.state;
    const images = project && project.images.map((imgName: string) => (
      <div key={imgName} className={styles.projectImage}>
        <LazyLoadedImage imageName={imgName} folder={ImageFolders.PROJECTS_LARGE}></LazyLoadedImage>
      </div>
    ));
    const tools = project && project.tools.map((tool: string, i) => {
      const toolDivider = i < project.tools.length - 1 ? <span className={styles.toolDivider}>|</span> : null;
      return (
        <span key={tool} className={styles.toolSpan}>
          <span className={styles.tool}>{tool}</span>
          {toolDivider}
        </span>
      );
    });
    const description = project && project.description.split('\n').map((section: string) => (
      <div key={Math.floor(Math.random() * 100000)} className={styles.descriptionSection}>
        <TextComponent size={'1.2rem'} color={'$offwhite'} content={section}></TextComponent>
      </div>
    ));
    return project ? (
      <div className={styles.projectsPageContainer}>
        <section className={styles.projectInfoSection}>
          <div className={styles.projectNameContainer}>
            <TextComponent size={'3rem'} color={'$offwhite'} content={project.title}></TextComponent>
          </div>
          <div className={styles.projectToolsContainer}>
            {tools}
          </div>
          <div className={styles.projectDescriptionContainer}>
            {description}
          </div>
        </section>
        <section className={styles.projectImagesSection}>
          {images}
        </section>
      </div>
    ) : null;
  }
}