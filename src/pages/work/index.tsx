import { ReactElement } from 'react';
import { MainLayout } from '../../components/MainLayout/MainLayout';
import { ProjectThumb } from '../../components/ProjectThumb/ProjectThumb';
import { TransitionView } from '../../components/TransitionView/TransitionView';
import { projects } from '../../projects/projects';

const WorkPage = () => {
  return (
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
                <ProjectThumb key={p.title} project={p} />
              ))}
            </div>
          ))}
        </div>
      }
    />
  );
};

WorkPage.getLayout = function getLayout(page: ReactElement) {
  return <TransitionView>{page}</TransitionView>;
};

export default WorkPage;
