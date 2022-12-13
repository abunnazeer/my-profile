import { Fragment } from 'react';
import Banner from '../components/banner/Banner';
import Experience from '../components/experiences/Experience';
import Skills from '../components/skills/Skills';
import Project from '../components/projects/Project';
import Clients from '../components/clients/Clients';
import Contact from '../components/contacts/Contact';
import Layout from '../components/layout/Layout';

function HomePage() {
  return (
    <Fragment>
      <Layout />
      <Banner />
      <Experience />
      <Skills />
      <Project />
      <Clients />
      <Contact />
    </Fragment>
  );
}

export default HomePage;
