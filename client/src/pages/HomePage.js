import { Fragment } from 'react';
import Banner from '../components/Banner';
import Experience from '../components/exp/Experience';
import Lang from '../components/skills/Lang';
import Project from '../projects/Project';
import Clients from '../components/clients/Clients';
import Contact from '../components/Contact';
import Layout from '../components/layout/Layout';

function HomePage() {
  return (
    <Fragment>
      <Layout />
      <Banner />
      <Experience />
      <Lang />
      <Project />
      <Clients />
      <Contact />
    </Fragment>
  );
}

export default HomePage;
