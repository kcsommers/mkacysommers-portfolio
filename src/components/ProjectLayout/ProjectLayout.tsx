import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import ChevronLeftIcon from '../../components/svg/chevron-left-solid.svg';
import { useAssetCache } from '../../context/use-asset-cache';
import { Project } from '../../projects/projects';
import { LazyItem } from '../LazyItem/LazyItem';

type ProjectLayoutProps = {
  project: Project;
};

export const ProjectLayout = ({ project }: ProjectLayoutProps) => {
  const { imageCache } = useAssetCache();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="flex relative z-20 text-foreground transition-colors">
      <div className="py-24 flex-1">
        <Link
          href="/work"
          className="inline-flex items-center hover:opacity-70"
          scroll={false}
        >
          <span className="mr-2">
            <ChevronLeftIcon className="fill-secondary transition-colors" />
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
            src={imageCache.get(project.coverImage) || project.coverImage}
            alt={project.title}
            fill={true}
            style={{ objectFit: 'cover' }}
          />
        </div>
        <LazyItem>
          <p className="text-2xl mt-16 mb-12">{project.blurb}</p>
          <h3 className="inline-block uppercase font-medium spacing tracking-widest text-lg leading-3">
            Technologies
            <span className="inline-block w-full h-[2px] bg-secondary transition-colors"></span>
          </h3>
          <p>{project.tools.join(', ')}</p>
          {project.links && (
            <div className="mt-12">
              <h3 className="inline-block uppercase font-medium spacing tracking-widest text-lg leading-3">
                Links
                <span className="inline-block w-full h-[2px] bg-secondary transition-colors"></span>
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

        <div className="mt-16">
          {project.sections.map((section, i) => (
            <div key={Math.random()}>
              <LazyItem key={`project_section_text_${i}`}>
                {section.text && (
                  <p className="my-12">{section.text.content}</p>
                )}
              </LazyItem>
              {(section.images || []).map((url: string) => (
                <LazyItem key={`project_section_img_${i}`}>
                  <div
                    key={url}
                    className="relative my-12"
                    style={{
                      aspectRatio: '999 / 545',
                    }}
                  >
                    <Image
                      src={imageCache.get(url) || url}
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
