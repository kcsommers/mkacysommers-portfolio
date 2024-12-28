import Image from 'next/image';
import { ReactElement, useState } from 'react';
import { AppBackground } from '../components/AppBackground/AppBackground';
import { AppGutters } from '../components/AppGutters/AppGutters';
import { JoniVideo } from '../components/JoniVideo/JoniVideo';
import { MainLayout } from '../components/MainLayout/MainLayout';
import { SharedHead } from '../components/SharedHead/SharedHead';
import { TransitionView } from '../components/TransitionView/TransitionView';
import { useAssetCache } from '../context/use-asset-cache';
import { useDeviceDetect } from '../utils/hooks/use-device-detect';

const MKACY_IMG_URL =
  'https://res.cloudinary.com/kcsommers/image/upload/v1643868947/M%20Kacy%20Sommers/mkacy-beach.jpg';

const AboutPage = () => {
  const { imageCache } = useAssetCache();
  const [showJoni, setShowJoni] = useState(false);
  const [joniSelected, setJoniSelected] = useState(false);
  const { isMobile } = useDeviceDetect();

  return (
    <>
      <SharedHead
        metaTitle="M Kacy Sommers | About"
        metaImage=""
        pagePath="/about"
      />
      <AppGutters
        setShowJoni={setShowJoni}
        joniSelected={joniSelected}
        setJoniSelected={setJoniSelected}
      />
      {!isMobile && (
        <JoniVideo isVisible={showJoni} isSelected={joniSelected} />
      )}
      <AppBackground />
      <div className="flex flex-1 min-w-[80%] max-w-[80%] mx-auto">
        <MainLayout
          pageTitle="About"
          leftContent={
            <div className="tablet-landscape-up:pr-16">
              <h3 className="font-marcellus text-3xl mt-8 mb-4">
                Hi, I'm Kacy!
              </h3>
              <p>
                I'm a software engineer who specializes in building scalable and
                intuitive web-based applications.
              </p>
              <br />
              <p className="">
                I first discovered my love for JavaScript in 2017 when my
                patience for customer service jobs had officially run out. I
                read Jon Duckett's JavaScript and JQuery cover to cover, buried
                myself in Youtube tutorials, and eventually signed up for a web
                development bootcamp in Seattle, WA. And even though my
                experience until then was not computer science focused, my
                artistic experiences prepared me well for the creative
                challenges of web development. I discovered quickly that my
                brain was well suited for the blend of logic and creativity that
                writing code demands, and I've been in love with it ever since.
              </p>
              <br />
              <p className="">
                In 2018 I landed my first role at Adaptiva, a leading endpoint
                management software company based in Kirkland, WA. Once I was
                immersed in a professional environment and surrounded by
                engineers far more talented than me, I rapidly grew from entry
                level to senior engineer in my three and a half years there. I
                accepted a new challenge in 2021 when I joined the team at
                Peerspace, learning how to navigate the fast-paced,
                feature-driven world of an ambitious startup. There I learned a
                great deal about frontend architecture, and the balance between
                building for scale and building for speed.
                <br />
                Alongside my full time roles I've continuously taken on projects
                as a freelancer, building complex applications that challenge me
                to stay on top of the ever-evolving frontend landscape. With
                clients such as Ave Maria University and the San Jose Sharks,
                I've had the opportunity to work on far-reaching projects that
                have pushed me to grow and adapt in new ways. I'm endlessly
                grateful to work in a field that allows me to be creative, to
                learn, and to solve problems every day.
              </p>
            </div>
          }
          rightContent={
            <div
              className="relative mt-8 tablet-landscape-up:mt-[20vh] tablet-landscape-up:ml-8"
              style={{
                aspectRatio: '588 / 744',
              }}
            >
              <Image
                src={imageCache.get(MKACY_IMG_URL) || MKACY_IMG_URL}
                alt="M Kacy Sommers"
                fill={true}
                style={{ objectFit: 'cover' }}
              />
            </div>
          }
        />
      </div>
    </>
  );
};

AboutPage.getLayout = function getLayout(page: ReactElement) {
  return <TransitionView>{page}</TransitionView>;
};

export default AboutPage;
