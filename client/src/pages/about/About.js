import { Fragment, useState } from 'react';
import Layout from '../../components/layout/Layout';
import aboutStyles from './about.module.css';
import AboutCard from './AboutCard';
import ExperienceCard from './ExperienceCard';
import EducationCard from './EducationCard';
import CertificationCard from './CertificationCard';
import PublicationCard from './PublicationCard';
import GalleryCard from './GalleryCard';
import SkillCard from './SkillCard';
const About = () => {
  const [about, setAbout] = useState(true);
  const [skill, setSkill] = useState(false);
  const [exp, setExp] = useState(false);
  const [edu, setEdu] = useState(false);
  const [cert, setCert] = useState(false);
  const [publ, setPubl] = useState(false);
  const [gal, setGal] = useState(false);
  return (
    <Fragment>
      <Layout />
      <section className={aboutStyles.main__section}>
        <div className={aboutStyles.space__out}></div>
        <div
          className={`${aboutStyles.about__header} ${aboutStyles.about__section}`}
        >
          <img
            src="../../assets/img/abdullahi.jpeg"
            className={aboutStyles.about__image}
          />
        </div>
        <div
          className={`${aboutStyles.intro__section} ${aboutStyles.about__section}`}
        >
          <h1> Abdullahi Ahmad</h1>
          <div className={aboutStyles.head__line}>
            <p>
              SOFTWARE DEVELOPER | REACT JS | HTML | CSS | JAVASCRIPT | NODE JS
              | EXPRESS | MongoDB.
            </p>
          </div>
          <div className={aboutStyles.tag__line}>
            <p>
              Talks about #finace, #designer, #producthunt, #productdesign, and
              #productdevelopment
            </p>
          </div>
          <div className={aboutStyles.location__details}>
            <img src="../../assets/icons/nigeria.png" />
            <p>Abuja, Federal Capital Territory, Nigeria </p>
          </div>
        </div>
        <div className={aboutStyles.space__out}></div>
        <section className={aboutStyles.about__me_flex}>
          <div
            className={`${aboutStyles.about__me} ${aboutStyles.about__card__container} `}
          >
            <AboutCard about={about} />

            <ExperienceCard exp={exp} />
            <EducationCard edu={edu} />
            <CertificationCard cert={cert} />
            <PublicationCard publ={publ} />
            <GalleryCard gal={gal} />
            <SkillCard skill={skill} />
          </div>

          <div className={aboutStyles.about__sidebar}>
            <h1>Navigation</h1>
            <ul>
              <li
                onClick={() =>
                  setAbout(true) &
                  setSkill(false) &
                  setExp(false) &
                  setEdu(false)
                }
              >
                ABOUT ME
              </li>

              <li
                onClick={() =>
                  setExp(true) &
                  setAbout(false) &
                  setSkill(false) &
                  setEdu(false) &
                  setCert(false) &
                  setPubl(false) &
                  setGal(false)
                }
              >
                EXPERIENCE
              </li>
              <li
                onClick={() =>
                  setEdu(true) &
                  setAbout(false) &
                  setExp(false) &
                  setSkill(false) &
                  setCert(false) &
                  setPubl(false) &
                  setGal(false)
                }
              >
                EDUCATION
              </li>
              <li
                onClick={() =>
                  setCert(true) &
                  setSkill(false) &
                  setAbout(false) &
                  setExp(false) &
                  setEdu(false) &
                  setPubl(false) &
                  setGal(false)
                }
              >
                CERTIFCATION
              </li>
              <li
                onClick={() =>
                  setPubl(true) &
                  setAbout(false) &
                  setExp(false) &
                  setEdu(false) &
                  setCert(false) &
                  setGal(false) &
                  setSkill(false)
                }
              >
                PUBLICATION
              </li>
              <li
                onClick={() =>
                  setGal(true) &
                  setPubl(false) &
                  setAbout(false) &
                  setExp(false) &
                  setEdu(false) &
                  setCert(false) &
                  setSkill(false)
                }
              >
                GALAERY
              </li>
              <li
                onClick={() =>
                  setSkill(true) &
                  setAbout(false) &
                  setExp(false) &
                  setEdu(false) &
                  setCert(false) &
                  setPubl(false) &
                  setGal(false)
                }
              >
                SKILLS
              </li>
            </ul>
          </div>
        </section>
      </section>
      <div className={aboutStyles.space__out}></div>
    </Fragment>
  );
};

export default About;
