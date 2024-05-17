import { useContext } from 'react';

import GlobalContext from 'context';

import * as styled from './style';

const Intro = () => {
  const { theme, width } = useContext(GlobalContext);

  return (
    <styled.Hero>
      <styled.Description
        variants={styled.descriptionVariants}
        initial="hidden"
        animate="visible"
      >
        <h1>
          Hi. I'm Adrian Li. <span>A front-end developer.</span>
        </h1>
        <p>
          I love spending hours crafting cool stuff, untangling pesky problems
          and soaking up new knowledge
          <span> Coding is my happy place😄</span>
        </p>
      </styled.Description>
      {width < 850 && (
        <styled.LinkWrapper>
          <styled.NavLink href="https://github.com/Halmesn">
            <styled.Icon
              src={`${
                theme === 'light'
                  ? '/icons/github.svg'
                  : '/icons/github-dark.svg'
              }`}
              alt="github icon"
            ></styled.Icon>
            <span>GitHub</span>
          </styled.NavLink>
          <styled.NavLink href="https://www.linkedin.com/in/adrianli-dev/">
            <styled.Icon
              src={`${
                theme === 'light'
                  ? '/icons/linkedin.svg'
                  : '/icons/linkedin-dark.svg'
              }`}
              alt="linkedin icon"
            ></styled.Icon>
            <span>LinkedIn</span>
          </styled.NavLink>
        </styled.LinkWrapper>
      )}
    </styled.Hero>
  );
};

export default Intro;
