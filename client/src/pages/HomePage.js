import { Fragment } from 'react';
import Banner from '../components/Banner';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Project from '../components/Project';
import Contact from '../components/Contact';

import Header from '../components/layout/Header';
import Hnadle from '../components/Handle';
import MobileMenu from '../components/layout/MobileMenu';

function HomePage() {
  return (
    <Fragment>
      <Header />
      <Banner />
      <Experience />
      <Skills />
      <Project />
      <Contact />
      <Hnadle
        ralative="relative"
        name="fixed"
        bottom="0"
        top="20rem"
        left="1rem"
        block="block"
        // trans=" translateX(-50%)"
      />
      <MobileMenu />
    </Fragment>
  );
}

export default HomePage;
