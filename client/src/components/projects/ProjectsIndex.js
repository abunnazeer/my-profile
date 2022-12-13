import { Fragment } from 'react';
import React, { useEffect, useState } from 'react';
import indexStyles from './projectsIndex.module.css';

import IndexCard from './IndexCard';

const Url = 'http://127.0.0.1:8000';

function ProjectsIndex() {
  const [project, setProject] = useState([]);
  async function projectData(url) {
    const response = await fetch(url + '/projects');
    const data = await response.json();
    setProject(data);
  }
  useEffect(() => {
    projectData(Url);
  }, []);

  return (
    <Fragment>
      <div className={`${indexStyles.index__container}`}>
        <div className={indexStyles.index__header}>
          <div>
            <h1>TITLE</h1>
          </div>
          <div>
            <h1>IMAGE</h1>
          </div>
          <div>
            <h1>ACTION</h1>
          </div>
        </div>

        {project.map(function (item) {
          return (
            <IndexCard name={item.name} img={item.imagePath} key={item.id} />
          );
        })}
      </div>
    </Fragment>
  );
}

export default ProjectsIndex;
