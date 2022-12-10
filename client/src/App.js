import MainSite from './MainSite';
import Config from './administration/Config';
import Showcase from './pages/showcase';
import Resources from './pages/resources';
import NoPage from './pages/NoPage';
import About from './pages/About';

// configuration import
import ManageProjects from './projects/ManageProjects';
import ManageSkills from './administration/ManageSkills';
import ManageExperiences from './administration/ManageExperiences';
import ManageClients from './administration/ManageClients';
import { Routes, Route } from 'react-router-dom';

import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<MainSite />} />
        <Route path="/showcase" element={<Showcase />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/about-me" element={<About />} />
        <Route path="/*" element={<NoPage />} />
        <Route path="/settings" element={<Config />} />
        {/* configruration url */}
        <Route path="/manage-projects" element={<ManageProjects />} />
        <Route path="/manage-skills" element={<ManageSkills />} />
        <Route path="/manage-experiences" element={<ManageExperiences />} />
        <Route path="/manage-clients" element={<ManageClients />} />
      </Routes>
    </Fragment>
  );
}

export default App;
