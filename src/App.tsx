import 'styles/font.css';

import { Route, Routes } from 'react-router-dom';

import { GlobalContextProvider } from 'context';

import Layout from 'components/Layout';
import About from 'pages/About';
import Intro from 'components/Intro';
import Project from 'pages/Project';
import Hotflix from 'pages/Project/Hotflix';

const App = () => {
  return (
    <GlobalContextProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/project/hotflix" element={<Hotflix />} />
        </Routes>
      </Layout>
    </GlobalContextProvider>
  );
};

export default App;
