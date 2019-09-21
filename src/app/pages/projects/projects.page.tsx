import React from 'react';
import styles from './projects.module.scss';
import { FooterComponent } from 'app/lib/components/footer/footer.component';
import { Project, projects } from 'app/lib/core/projects';
import { TextComponent } from 'app/lib/components/text/text.component';
import { HeaderComponent } from 'app/lib/components/header/header.component';


type ProjectsPageProps = {
  match: any
}
type ProjectsPageState = {
  project: Project | undefined
}

export class ProjectsPage extends React.Component<ProjectsPageProps, ProjectsPageState> {
  private project: Project;
  constructor(props) {
    super(props);
    this.state = {
      project: undefined
    }
  }
  componentDidMount() {
    const projectName = this.props.match.params.name;
    const project = projects.find(p => p.title = projectName) as Project;
    this.setState({ project })
  }
  render() {
    const { project } = this.state;
    return project ? (
      <div className={styles.projectsPageContainer}>
        <section className={styles.projectInfoSection}>
          <div className={styles.projectNameContainer}>
            <TextComponent color={'black'} content={project.title}></TextComponent>
          </div>
        </section>
        <FooterComponent></FooterComponent>
      </div>
    ) : null;
  }
}