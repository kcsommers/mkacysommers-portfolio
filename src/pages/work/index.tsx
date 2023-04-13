import Image from 'next/image';
import Link from 'next/link';
import { MainLayout } from '../../components/MainLayout/MainLayout';
import { projects } from '../../projects/projects';

const WorkPage = () => {
  return (
    <MainLayout
      pageTitle="Work"
      rightContent={
        <div className="tablet-landscape-up:mt-[20vh]">
          {Object.keys(projects).map((type: string) => (
            <div key={type}>
              <h3 className="uppercase font-medium spacing tracking-widest text-lg mb-4">
                {type}
              </h3>
              {projects[type].map((p) => (
                <div key={p.title} className="mb-12">
                  <div>
                    <Link href={`/work/${p.param}`}>
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
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      }
    />
  );
};

export default WorkPage;
