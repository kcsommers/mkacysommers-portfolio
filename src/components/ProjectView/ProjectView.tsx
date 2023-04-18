import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { MutableRefObject, useRef } from 'react';
import ChevronLeftIcon from '../../components/svg/chevron-left-solid.svg';
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

  return !fullView ? (
    <ProjectThumb project={project} thumbRef={thumbRef} />
  ) : (
    <div className="flex relative z-20 mx-[10%]">
      <div className="py-24">
        <Link href="/work" className="inline-flex items-center">
          <span className="mr-2">
            <ChevronLeftIcon />
          </span>
          Back to projects
        </Link>
        <h2 className="uppercase font-marcellus text-3xl my-2">
          {project.title}
        </h2>
        {project.roles && <span>{project.roles.join(', ')}</span>}
        <div
          className="relative mt-8"
          style={{
            aspectRatio: '999 / 545',
          }}
        >
          <Image
            src={project.coverImage}
            alt={project.title}
            fill={true}
            style={{ objectFit: 'cover' }}
          />
        </div>
        <p className="text-2xl mt-12 mb-8">{project.blurb}</p>
        <h3 className="inline-block uppercase font-medium spacing tracking-widest text-lg leading-3">
          Technologies
          <span className="inline-block w-full h-[2px] bg-foreground"></span>
        </h3>
        <p>{project.tools.join(', ')}</p>
        {project.links && (
          <div className="mt-8">
            <h3 className="inline-block uppercase font-medium spacing tracking-widest text-lg leading-3">
              Links
              <span className="inline-block w-full h-[2px] bg-foreground"></span>
            </h3>
            <div>
              {project.links.github && (
                <a href={project.links.github}>github</a>
              )}
              {project.links.site && <a href={project.links.site}>site</a>}
            </div>
          </div>
        )}
        <div className="mt-12">
          {project.sections.map((section) => (
            <div key={Math.random()}>
              {section.text && <p className="my-8">{section.text.content}</p>}
              {(section.images || []).map((url: string) => (
                <div
                  key={url}
                  className="relative my-8"
                  style={{
                    aspectRatio: '999 / 545',
                  }}
                >
                  <Image
                    src={url}
                    alt={project.title}
                    fill={true}
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
