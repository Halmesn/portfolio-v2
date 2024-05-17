import * as styled from './style';

import ThemeToggler from 'components/ThemeToggler';

import { useContext } from 'react';
import GlobalContext from 'context';

const Navbar = ({ pathname }: { pathname: string }) => {
  const isHome = pathname === '/' ? true : false;

  const { width, theme, gridState, setGridState, setChatbotState } =
    useContext(GlobalContext);

  const getProjectUrl = () => {
    if (isHome && width < 900) return '/project';
    else if (width > 900 && isHome) return '#';
    else return '/';
  };

  return (
    <styled.Navbar $gridState={gridState} $isHome={isHome}>
      <styled.NavList>
        <styled.LinkWrapper
          onClick={() => width > 900 && isHome && setGridState('open')}
          className="project"
        >
          <styled.NavLink to={getProjectUrl()} rotate="-2deg">
            <span>{isHome ? 'Project' : 'Home'}</span>
          </styled.NavLink>
        </styled.LinkWrapper>
        <styled.LinkWrapper>
          <styled.NavLink to="/about" rotate="1deg">
            <span>About</span>
          </styled.NavLink>
        </styled.LinkWrapper>
        <styled.LinkWrapper
          onClick={() => setChatbotState('open')}
          className="contact"
        >
          <styled.NavLink to="#" rotate="1deg">
            <span>Contact</span>
          </styled.NavLink>
        </styled.LinkWrapper>
        <styled.LinkWrapper className="logo">
          <styled.NavLink to="/">
            <styled.Logo
              src={`${
                theme === 'light'
                  ? '/images/brand/logo.svg'
                  : '/images/brand/logo-dark.svg'
              }`}
              alt="logo"
            />
          </styled.NavLink>
        </styled.LinkWrapper>
        {width > 850 && (
          <>
            <styled.LinkWrapper className="github">
              <styled.NavLink to="https://github.com/Halmesn">
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
            </styled.LinkWrapper>
            <styled.LinkWrapper>
              <styled.NavLink
                to="https://www.linkedin.com/in/adrianli-dev/"
                rotate="-1deg"
              >
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
          </>
        )}
        {width && <ThemeToggler />}
      </styled.NavList>
    </styled.Navbar>
  );
};

export default Navbar;
