import Image from 'next/image';
import { ReactElement } from 'react';
import { AppBackground } from '../components/AppBackground/AppBackground';
import { AppGutters } from '../components/AppGutters/AppGutters';
import { MainLayout } from '../components/MainLayout/MainLayout';
import { SharedHead } from '../components/SharedHead/SharedHead';
import { TransitionView } from '../components/TransitionView/TransitionView';
import { useAssetCache } from '../context/use-asset-cache';

const MKACY_IMG_URL =
  'https://res.cloudinary.com/kcsommers/image/upload/v1643868947/M%20Kacy%20Sommers/mkacy-beach.jpg';

const AboutPage = () => {
  const { imageCache } = useAssetCache();

  return (
    <>
      <SharedHead
        metaTitle="M Kacy Sommers | About"
        metaImage=""
        pagePath="/about"
      />
      <AppGutters />
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
                In other words, I love JavaScript. I first started learning it
                in 2017 when my tolerance for delivering food and slinging
                lattes had officially run out. I read Jon Duckett's JavaScript
                and JQuery cover to cover, buried myself in Youtube tutorials,
                and eventually signed up for a web development bootcamp in
                Seattle, WA. And even though my experience until then was not
                computer science focused, my artistic experiences prepared me
                well for the creative challenges of web development. I
                discovered quickly that my brain was well suited for the blend
                of logic and creativity that writing code requires, and I've
                been in love with it ever since.
              </p>
              <br />
              <p className="">
                A few months and a grueling job search later, I landed my first
                full-time front-end engineering role at Adaptiva, an endpoint
                management software company based in Kirkland, WA. Once I was
                immersed in a professional environment and surrounded by
                engineers far more talented than me, I was able to rapidly
                absorb new knowledge and moved from entry level to senior
                engineer in two years. Alongside this full time role I've
                continuously taken on projects as a freelancer, contributing to
                or building from scratch a number of complex and unique
                applications. This additional work has helped me keep pace with
                the ever-changing landscape of front-end web development, and
                with every day and every google search I'm learning more and
                more. I couldn't be more grateful to work in a field that allows
                me to do just that.
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
