import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'styles/GlobalStyle';

import Birds from 'components/Birds';
import Navbar from 'components/Navbar';
import Grid from 'components/Grids';
import Footer from 'components/Footer';

import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';

import GlobalContext from 'context';

import { lightTheme, darkTheme } from 'styles/Themes';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useContext(GlobalContext);
  const location = useLocation();
  const { pathname } = location;

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      {pathname === '/' ? <Birds theme={theme} /> : null}
      <header style={{ zIndex: 2 }}>
        <Navbar pathname={pathname} />
      </header>
      <main style={{ zIndex: 1, height: '100%', display: 'grid' }}>
        {children}
        <Grid />
      </main>
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
