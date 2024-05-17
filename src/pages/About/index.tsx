import * as styled from './style';

import { useContext, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

import GlobalContext from 'context';

import Typewriter from '/images/about/typewriter.png';
import Tools from '/images/about/tools.png';
import Mails from '/images/about/mails.png';

const About = () => {
  const { width, setChatbotState } = useContext(GlobalContext);

  const ref = useRef<HTMLDivElement>(null);

  const controls = useAnimation();

  const [inViewRef, inView] = useInView({
    threshold: 0.35,
  });
  const [inViewRef2, inView2] = useInView({
    threshold: 0.35,
  });
  const [inViewRef3, inView3] = useInView({
    threshold: 0.35,
  });

  useEffect(() => {
    if (width < 900) {
      controls.start('visible');
      controls.start('visible2');
      controls.start('visible3');
    } else {
      if (inView) controls.start('visible');

      if (inView2) controls.start('visible2');

      if (inView3) controls.start('visible3');
    }
  }, [controls, inView, inView2, inView3, width]);

  return (
    <styled.About>
      <div className="heading">
        <h2>About me</h2>
        <p>
          Hello! My name is Adrian, I'm a&nbsp;
          <span className="line">front-end developer</span> chilling in
          Alstonville Australia🦘, while working remotely for Komatsu Mining👨‍💻
        </p>
        <span
          className="scroll"
          onClick={() => {
            if (ref.current) {
              ref.current.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
              });
            }
          }}
        ></span>
      </div>
      <div className="content">
        <div className="grid-container" ref={inViewRef}>
          <styled.Img
            animate={controls}
            initial="hidden"
            transition={{ duration: 0.5 }}
            variants={{
              visible: { opacity: 1, y: -50 },
              hidden: { opacity: 0, y: 0 },
            }}
            ref={ref}
          >
            <img src={Typewriter} alt="a cool typewriter" />
          </styled.Img>
        </div>
        <div className="grid-container">
          <styled.Title
            animate={controls}
            initial="hidden"
            transition={{ duration: 0.5, delay: 0.3 }}
            variants={{
              visible: { opacity: 1, y: -50 },
              hidden: { opacity: 0, y: 0 },
            }}
          >
            I'm the one you'd like to work with
          </styled.Title>
          <styled.Description
            animate={controls}
            initial="hidden"
            transition={{ duration: 0.5, delay: 0.3 }}
            variants={{
              visible: { opacity: 1, y: -50 },
              hidden: { opacity: 0, y: 0 },
            }}
          >
            <p>
              I’m a hard working and dedicated person with a determination to
              deliver the very highest quality. I take great pride in my work,
              and I always try to better myself with every project I work on.
            </p>
            <p></p>
          </styled.Description>
        </div>
        <div className="grid-container" ref={inViewRef2}>
          <styled.Title
            animate={controls}
            initial="hidden"
            transition={{ duration: 0.5 }}
            variants={{
              visible2: { opacity: 1, y: -50 },
              hidden: { opacity: 0, y: 0 },
            }}
          >
            I like to dream more, learn more and become more.
          </styled.Title>
          <styled.Description
            animate={controls}
            initial="hidden"
            transition={{ duration: 0.5 }}
            variants={{
              visible2: { opacity: 1, y: -50 },
              hidden: { opacity: 0, y: 0 },
            }}
          >
            <p>
              Since I wrote my first 'hello world' in HTML, I have gained
              experience in:
            </p>

            <ul className="skills one-column">
              <li>
                Building Modern Front-End Web Applications ( HTML, JavaScript
                ES6, TypeScript, React, Next.js)
              </li>
              <li>
                Applying various CSS solutions( Styled-components, Tailwind CSS,
                Sass, CSS modules)
              </li>
              <li>Interacting with database(REST APIs, GraphQL )</li>
              <li>Version Control tools(Git, Github)</li>
            </ul>

            <p>
              I’m also a fast learner, able to pick up new skills and juggle
              different projects with relative ease.
            </p>
          </styled.Description>
        </div>
        <div className="grid-container">
          <styled.Img
            animate={controls}
            initial="hidden"
            transition={{ duration: 0.5, delay: 0.3 }}
            variants={{
              visible2: { opacity: 1, y: -50 },
              hidden: { opacity: 0, y: 0 },
            }}
          >
            <img src={Tools} alt="a cool rocket" />
          </styled.Img>
        </div>
        <div className="grid-container" ref={inViewRef3}>
          <styled.Img
            animate={controls}
            initial="hidden"
            transition={{ duration: 0.5 }}
            variants={{
              visible3: { opacity: 1, y: -50 },
              hidden: { opacity: 0, y: 0 },
            }}
          >
            <img src={Mails} alt="a cool mailbox" />
          </styled.Img>
        </div>
        <div className="grid-container">
          <styled.Title
            animate={controls}
            initial="hidden"
            transition={{ duration: 0.5, delay: 0.3 }}
            variants={{
              visible3: { opacity: 1, y: -50 },
              hidden: { opacity: 0, y: 0 },
            }}
          >
            I'm always open to job opportunities and new connections.
          </styled.Title>
          <styled.Description
            animate={controls}
            initial="hidden"
            transition={{ duration: 0.5, delay: 0.3 }}
            variants={{
              visible3: { opacity: 1, y: -50 },
              hidden: { opacity: 0, y: 0 },
            }}
          >
            <p>
              Shoot me over an email, have a look at my resume, or just&nbsp;
              <span onClick={() => setChatbotState('open')} className="chat">
                talk
              </span>
              &nbsp;with me!
            </p>
            <div className="buttons">
              <styled.Button>
                <a href="mailto:adrian.li.dev@gmail.com">
                  <styled.EmailIcon />
                  Email
                </a>
              </styled.Button>
              <styled.Button>
                <a href="https://drive.google.com/file/d/1Neh66oJyiG87217mAF55pRB-Lr48LvYK/view?usp=sharing">
                  <styled.ResumeIcon />
                  Resume
                </a>
              </styled.Button>
            </div>
          </styled.Description>
        </div>
      </div>
      <div className="copyright">
        Designed & Built with love ❤️ by <br /> Adrian Li © 2024
      </div>
    </styled.About>
  );
};

export default About;
