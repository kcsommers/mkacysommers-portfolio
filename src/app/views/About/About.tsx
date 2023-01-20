import { motion } from 'framer-motion';
import { FC } from 'react';
import { AnimatedText, BaseLayout } from '../../components';
import styles from './About.module.scss';

export const About: FC = () => {
  return (
    <BaseLayout
      pageTitle="About"
      leftContent={
        <>
          <p className={`animated-text-wrap ${styles.aboutText}`}>
            <AnimatedText delay={1.45}>
              <span className={styles.hiWrap}>Hi, I'm Kacy!</span> I'm a
              software engineer who specializes in building scalable and
              intuitive web-based applications.
            </AnimatedText>
          </p>
          <p className={`animated-text-wrap ${styles.aboutText}`}>
            <AnimatedText delay={1.55}>
              In other words, I love JavaScript. I first started learning it in
              2017 when my tolerance for delivering food and slinging lattes had
              officially run out. I read Jon Duckett's JavaScript and JQuery
              cover to cover, buried myself in Youtube tutorials, and eventually
              signed up for a web development bootcamp in Seattle, WA. And even
              though my experience until then was not computer science focused,
              my artistic experiences prepared me well for the creative
              challenges of web development. I discovered quickly that my brain
              was well suited for the blend of logic and creativity that writing
              code requires, and I've been in love with it ever since.
            </AnimatedText>
          </p>
          <p className={`animated-text-wrap ${styles.aboutText}`}>
            <AnimatedText delay={1.65}>
              A few months and a grueling job search later, I landed my first
              full-time front-end engineering role at Adaptiva, an endpoint
              management software company based in Kirkland, WA. Once I was
              immersed in a professional environment and surrounded by engineers
              far more talented than me, I was able to rapidly absorb new
              knowledge and moved from entry level to senior engineer in two
              years. Alongside this full time role I've continuously taken on
              projects as a freelancer, contributing to or building from scratch
              a number of complex and unique applications. This additional work
              has helped me keep pace with the ever-changing landscape of
              front-end web development, and with every day and every google
              search I'm learning more and more. I couldn't be more grateful to
              work in a field that allows me to do just that.
            </AnimatedText>
          </p>
        </>
      }
      rightContent={
        <>
          <motion.div
            className={styles.aboutImgWrap}
            initial="enter"
            animate="center"
            exit="exit"
            variants={{
              enter: {
                opacity: 0,
                scale: 1.1,
              },
              center: {
                opacity: 1,
                scale: 1,
              },
              exit: {
                opacity: 0,
                scale: 1.1,
                transition: {
                  delay: 0,
                  duration: 0.25,
                },
              },
            }}
            transition={{
              delay: 1.45,
              duration: 0.5,
            }}
          >
            <img
              src="https://res.cloudinary.com/kcsommers/image/upload/v1643868947/M%20Kacy%20Sommers/mkacy-beach.jpg"
              alt="M Kacy Sommers"
            />
          </motion.div>
        </>
      }
    />
  );
};
