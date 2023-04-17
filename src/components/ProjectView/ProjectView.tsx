import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { MutableRefObject, useRef } from 'react';
import { Project } from '../../projects/projects';
import { useIntersectionObserver } from '../../utils/hooks/use-intersection-observer';

type ProjectViewProps = {
  project: Project;
  fullView: boolean;
};

type ProjectThumbProps = {
  project: Project;
  thumbRef: MutableRefObject<HTMLDivElement>;
};

export const ProjectThumb = ({ project, thumbRef }: ProjectThumbProps) => {
  const { isVisible } = useIntersectionObserver(thumbRef, 0.25);

  return (
    <motion.div
      ref={thumbRef}
      className="mb-12"
      animate={isVisible ? 'visible' : 'hidden'}
      variants={{
        hidden: {
          opacity: 0,
          y: 50,
        },
        visible: {
          opacity: 1,
          y: 0,
        },
      }}
      transition={{
        duration: 0.5,
      }}
    >
      <div>
        <Link href={`/work?p=${project.param}`}>
          <h4 className="font-marcellus text-3xl uppercase mb-2">
            {project.title}
          </h4>
          <div
            className="relative"
            style={{
              aspectRatio: '545 / 297',
            }}
          >
            <Image
              src={project.coverImage}
              alt={project.title}
              fill={true}
              style={{ objectFit: 'cover' }}
            />
          </div>
        </Link>
      </div>
    </motion.div>
  );
};

export const ProjectView = ({ project, fullView }: ProjectViewProps) => {
  const thumbRef = useRef();

  return <ProjectThumb project={project} thumbRef={thumbRef} />;
};
