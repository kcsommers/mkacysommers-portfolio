import { FC, useMemo } from 'react';
import { useParams } from 'react-router';
import { IProject, projects } from '../../core';

export const ProjectView: FC = () => {
  const { projectTitle } = useParams<{ projectTitle: string }>();

  const project: IProject = useMemo<IProject>(() => {
    return projects.find((_p) => _p.title === projectTitle)!;
  }, [projectTitle]);

  return (
    <div>
      <h2>{project.title}</h2>
    </div>
  );
};
