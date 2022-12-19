import React, { useEffect, useState } from 'react';
import Card from './ProjectCard';
import { Link } from 'react-router-dom';

const Url = 'http://localhost:8000';
function Project() {
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
    <section className="latest__projects">
      <h1 className="title">Latest Projects</h1>
      <div className="project__container">
        {project.map(function (item, id) {
          return <Card img={item.imagepath} name={item.title} key={id} />;
        })}
      </div>
      <Link to="/showcase" className="custom__btn">
        View More
      </Link>
    </section>
  );
}

export default Project;
