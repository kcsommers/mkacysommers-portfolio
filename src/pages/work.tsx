import { AnimatePresence, motion } from 'framer-motion';
import { GetServerSideProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactElement, useEffect, useState } from 'react';
import { AppBackground } from '../components/AppBackground/AppBackground';
import { AppGutters } from '../components/AppGutters/AppGutters';
import { JoniVideo } from '../components/JoniVideo/JoniVideo';
import { LazyItem } from '../components/LazyItem/LazyItem';
import { MainLayout } from '../components/MainLayout/MainLayout';
import { ProjectLayout } from '../components/ProjectLayout/ProjectLayout';
import { SharedHead } from '../components/SharedHead/SharedHead';
import { TransitionView } from '../components/TransitionView/TransitionView';
import { useAssetCache } from '../context/use-asset-cache';
import { useTransition } from '../context/use-transition';
import {
  Project,
  allProjects,
  getProject,
  projects,
} from '../projects/projects';
import { blurVariants } from '../utils/animations/blur-variants';
import { useDeviceDetect } from '../utils/hooks/use-device-detect';

const WorkPage = () => {
  const router = useRouter();
  const { imageCache } = useAssetCache();
  const [showJoni, setShowJoni] = useState(false);
  const [joniSelected, setJoniSelected] = useState(false);
  const { isMobile } = useDeviceDetect();

  const [selectedProject, setSelectedProject] = useState<Project>(
    getProject(router.query?.p as string)
  );

  const { isTransitioning } = useTransition();

  useEffect(() => {
    setSelectedProject(getProject(router.query?.p as string));
  }, [router.query]);

  return (
    <>
      <SharedHead
        metaTitle="M Kacy Sommers | Work"
        metaImage=""
        pagePath="/work"
      >
        <script type="application/ld+json">
          {`
            {
              "@context": "http://schema.org",
              "@type": "CollectionPage",
              "name": "Work",
              "description": "M Kacy Sommers' projects",
              "itemListElement": ${allProjects().map((p, i) => ({
                '@type': 'ListItem',
                position: i + 1,
                name: p.title,
                url: p.links?.github || '',
                desciption: p.blurb,
                image: p.coverImage,
              }))}
            }
          `}
        </script>
      </SharedHead>
      <AppGutters
        setShowJoni={setShowJoni}
        joniSelected={joniSelected}
        setJoniSelected={setJoniSelected}
      />
      {!isMobile && (
        <JoniVideo isVisible={showJoni} isSelected={joniSelected} />
      )}
      <AppBackground />
      <AnimatePresence exitBeforeEnter>
        {!selectedProject ? (
          <motion.div
            key="work-main-layout"
            className="flex relative z-30 flex-1 min-w-[80%] max-w-[80%] mx-auto"
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
                            <Link href={`/work?p=${p.param}`} scroll={false}>
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
                                  src={
                                    imageCache.get(p.coverImage) || p.coverImage
                                  }
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
            className="relative z-20 min-w-[80%] max-w-[80%] flex-1 mx-auto"
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const headers = context.req.headers;
  return {
    props: {
      theme: headers['x-theme'] || 'LIGHT',
    },
  };
};

WorkPage.getLayout = function getLayout(page: ReactElement) {
  return <TransitionView>{page}</TransitionView>;
};

export default WorkPage;
