import Image from 'next/image';
import Link from 'next/link';
import ChevronLeftIcon from '../../components/svg/chevron-left-solid.svg';
import { Project } from '../../projects/projects';
import { LazyItem } from '../LazyItem/LazyItem';
import { useEffect } from 'react';

type ProjectLayoutProps = {
  project: Project;
};

export const ProjectLayout = ({ project }: ProjectLayoutProps) => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="flex relative z-20 mx-[10%] text-foreground transition-colors">
      <div className="py-24 flex-1">
        <Link href="/work" className="inline-flex items-center" scroll={false}>
          <span className="mr-2">
            <ChevronLeftIcon className="fill-foreground transition-colors" />
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
        <LazyItem>
          <p className="text-2xl mt-12 mb-8">{project.blurb}</p>
          <h3 className="inline-block uppercase font-medium spacing tracking-widest text-lg leading-3">
            Technologies
            <span className="inline-block w-full h-[2px] bg-foreground transition-colors"></span>
          </h3>
          <p>{project.tools.join(', ')}</p>
          {project.links && (
            <div className="mt-8">
              <h3 className="inline-block uppercase font-medium spacing tracking-widest text-lg leading-3">
                Links
                <span className="inline-block w-full h-[2px] bg-foreground transition-colors"></span>
              </h3>
              <div>
                {project.links.github && (
                  <a href={project.links.github}>github</a>
                )}
                {project.links.site && <a href={project.links.site}>site</a>}
              </div>
            </div>
          )}
        </LazyItem>

        <div className="mt-12">
          {project.sections.map((section, i) => (
            <div key={Math.random()}>
              <LazyItem key={`project_section_text_${i}`}>
                {section.text && <p className="my-8">{section.text.content}</p>}
              </LazyItem>
              {(section.images || []).map((url: string) => (
                <LazyItem key={`project_section_img_${i}`}>
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
                </LazyItem>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
