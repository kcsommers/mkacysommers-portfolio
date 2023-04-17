import Link from 'next/link';
import { Project } from '../../projects/projects';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useIntersectionObserver } from '../../utils/hooks/use-intersection-observer';
import { useRef } from 'react';

type ProjectThumbProps = {
  project: Project;
};

export const ProjectThumb = ({ project }: ProjectThumbProps) => {
  const elRef = useRef();
  const { isVisible } = useIntersectionObserver(elRef, 0.25);

  return (
    <motion.div
      ref={elRef}
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
        <Link href={`/work/${project.param}`}>
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
