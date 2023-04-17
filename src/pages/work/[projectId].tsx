import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import ChevronLeftIcon from '../../components/svg/chevron-left-solid.svg';
import { Project, projects } from '../../projects/projects';

const ProjectPage = () => {
  const router = useRouter();
  const project = useMemo(() => {
    const allProjects = Object.keys(projects).reduce((all, k) => {
      all.push(...projects[k]);
      return all;
    }, [] as Project[]);
    return allProjects.find((p) => p.param === router.query.projectId);
  }, [router.query.projectId]);

  return (
    <>
      {project && (
        <div className="relative z-20">
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
                  {section.text && (
                    <p className="my-8">{section.text.content}</p>
                  )}
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
      )}
    </>
  );
};

export default ProjectPage;
