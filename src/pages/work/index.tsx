import { ReactElement, useEffect, useState } from 'react';
import { MainLayout } from '../../components/MainLayout/MainLayout';
import { ProjectView } from '../../components/ProjectView/ProjectView';
import { TransitionView } from '../../components/TransitionView/TransitionView';
import { Project, projects } from '../../projects/projects';
import { useRouter } from 'next/router';
import { AppGutters } from '../../components/AppGutters/AppGutters';
import { AnimatePresence, motion } from 'framer-motion';
import { AppBackground } from '../../components/AppBackground/AppBackground';

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

  const blurVariants = {
    animateState: {
      filter: 'blur(10px)',
      opacity: 0,
      transition: {
        duration: 1,
      },
    },
    staticState: {
      filter: 'blur(0px)',
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <AppGutters />
      <AppBackground />
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
    </>
  );
};

WorkPage.getLayout = function getLayout(page: ReactElement) {
  return <TransitionView>{page}</TransitionView>;
};

export default WorkPage;
