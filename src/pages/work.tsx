import { useRouter } from 'next/router';
import { ReactElement, useEffect, useState } from 'react';
import { AppBackground } from '../components/AppBackground/AppBackground';
import { AppGutters } from '../components/AppGutters/AppGutters';
import { MainLayout } from '../components/MainLayout/MainLayout';
import { ProjectView } from '../components/ProjectView/ProjectView';
import { TransitionView } from '../components/TransitionView/TransitionView';
import { Project, projects } from '../projects/projects';

const allProjects = () => {
  return Object.keys(projects).reduce((all, key) => {
    all.push(...projects[key]);
    return all;
  }, [] as Project[]);
};

const getProject = (projectParam: string) => {
  return allProjects().find((p) => p.param === projectParam);
};

const WorkPage = () => {
  const router = useRouter();
  const [selectedProject, setSelectedProject] = useState<Project>(
    getProject(router.query?.p as string)
  );

  useEffect(() => {
    setSelectedProject(getProject(router.query?.p as string));
  }, [router.query]);

  return (
    <>
      <AppGutters />
      <AppBackground />
      {!selectedProject ? (
        <MainLayout
          pageTitle="Work"
          rightContent={
            <div className="mt-8 tablet-landscape-up:mt-[20vh]">
              {Object.keys(projects).map((type: string) => (
                <div key={type}>
                  <h3 className="uppercase font-medium spacing tracking-widest text-lg mb-4">
                    {type}
                  </h3>
                  {projects[type].map((p) => (
                    <ProjectView key={p.title} project={p} fullView={false} />
                  ))}
                </div>
              ))}
            </div>
          }
        />
      ) : (
        <ProjectView project={selectedProject} fullView={true} />
      )}
    </>
  );
};

WorkPage.getLayout = function getLayout(page: ReactElement) {
  return <TransitionView>{page}</TransitionView>;
};

export default WorkPage;
