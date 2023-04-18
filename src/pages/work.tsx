import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactElement, useEffect, useState } from 'react';
import { AppBackground } from '../components/AppBackground/AppBackground';
import { AppGutters } from '../components/AppGutters/AppGutters';
import { LazyItem } from '../components/LazyItem/LazyItem';
import { MainLayout } from '../components/MainLayout/MainLayout';
import { ProjectLayout } from '../components/ProjectLayout/ProjectLayout';
import { TransitionView } from '../components/TransitionView/TransitionView';
import { useTransition } from '../context/use-transition';
import { Project, projects } from '../projects/projects';
import { blurVariants } from '../utils/animations/blur-variants';

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

  const { isTransitioning } = useTransition();

  useEffect(() => {
    setSelectedProject(getProject(router.query?.p as string));
  }, [router.query]);

  return (
    <>
      <AppGutters />
      <AppBackground />
      <AnimatePresence exitBeforeEnter>
        {!selectedProject ? (
          <motion.div
            key="work-main-layout"
            className="flex relative z-30 flex-1 w-full"
            initial="blurState"
            animate="nonBlurState"
            exit="blurState"
            variants={blurVariants(0.5)}
            transition={{
              duration: 0.5,
            }}
          >
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
                        <div className="mb-12">
                          <LazyItem>
                            <Link href={`/work?p=${p.param}`}>
                              <h4 className="font-marcellus text-3xl uppercase mb-2">
                                {p.title}
                              </h4>
                              <div
                                className="relative"
                                style={{
                                  aspectRatio: '545 / 297',
                                }}
                              >
                                <Image
                                  src={p.coverImage}
                                  alt={p.title}
                                  fill={true}
                                  style={{ objectFit: 'cover' }}
                                />
                              </div>
                            </Link>
                          </LazyItem>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              }
            />
          </motion.div>
        ) : (
          <motion.div
            key="work-project-layout"
            className="relative z-20"
            initial="blurState"
            animate={isTransitioning ? 'blurState' : 'nonBlurState'}
            exit="blurState"
            variants={blurVariants(0.5)}
            transition={{
              duration: 0.5,
            }}
          >
            <ProjectLayout project={selectedProject} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

WorkPage.getLayout = function getLayout(page: ReactElement) {
  return <TransitionView>{page}</TransitionView>;
};

export default WorkPage;
