import MainSite from './MainSite';
import Config from './administration/Config';
import Showcase from './pages/Showcase';
import Resources from './pages/Resources';
import NoPage from './pages/NoPage';
import About from './pages/About';

// configuration import
import ManageProjects from './components/projects/ManageProjects';
import ManageSkills from './components/skills/ManageSkills';
import ManageExperiences from './components/experiences/ManageExperiences';
import ManageClients from './components/clients/ManageClients';
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
