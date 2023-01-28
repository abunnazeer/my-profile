import { useParams } from 'react-router-dom';
import { Fragment, useEffect, useState } from 'react';
// import Layout from '../../components/layout/Layout';
import detailStyles from './showcaseDetails.module.css';
const URL = 'http://localhost:8000/projects/';
function ProjectDetails() {
  const [project, setProject] = useState([]);
  const param = useParams().slug;
  useEffect(() => {
    const fetchDetails = async () => {
      const response = await fetch(URL + param);
      const data = await response.json();

      const loadedProject = Object.values(data)[1].project;
      const arrData = Object.values(loadedProject);

      setProject(arrData);
    };

    fetchDetails();
  }, []);

  return (
    <Fragment>
      {/* <Layout /> */}

      <section className={detailStyles.main__container}>
        <div className={detailStyles.img__container}>
          <img src={project[2]} />
          <div className={detailStyles.demo__links}>
            <a href={project[3]} className={detailStyles.github}>
              <i className="fa-brands fa-github"></i>
              Github
            </a>
            <a href={project[4]} className={detailStyles.drmo}>
              <i className="fa-solid fa-laptop-code"></i>
              Demo
            </a>
          </div>
        </div>
        <div className={detailStyles.content}>
          <h1> {project[1]}</h1>
          <p>
            Founded in August 2008 and based in San Francisco, California,
            Airbnb is a trusted community marketplace for people to list,
            discover, and book unique spaces around ...
          </p>
          <h1>STACKS</h1>
          <div className={detailStyles.stack__container}>
            <div className={detailStyles.stack__content}>
              <img src="./../assets/icons/atom.png" />
              <h3>React</h3>
            </div>
            <div className={detailStyles.stack__content}>
              <img src="./../assets/icons/js.png" />
              <h3>Javascript</h3>
            </div>
            <div className={detailStyles.stack__content}>
              <img src="./../assets/icons/bootstrap.png" />
              <h3>bootstrap</h3>
            </div>
            <div className={detailStyles.stack__content}>
              <img src="./../assets/icons/css.png" />
              <h3>Css</h3>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default ProjectDetails;
