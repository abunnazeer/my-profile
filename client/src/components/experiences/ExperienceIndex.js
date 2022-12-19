import { Fragment, useState, useEffect } from 'react';

import ExIndexCard from '../../administration/ExIndexCard';
//import IndexBody from '../../administration/IndexBody';
import ExIndexHeader from '../../administration/ExIndexHeader';

const Url = 'http://localhost:8000';
function ExperienceIndex() {
  const [experience, setExperience] = useState([]);
  async function experienceData(url) {
    const response = await fetch(url + '/experiences');
    const data = await response.json();
    setExperience(data);
  }
  useEffect(() => {
    experienceData(Url);
  }, []);
  return (
    <Fragment>
      <ExIndexHeader />

      {experience.map(function (item, id) {
        return (
          <ExIndexCard
            duration={item.duration}
            jobTitle={item.jobTitle}
            companyName={item.companyName}
            key={id}
          />
        );
      })}
    </Fragment>
  );
}
export default ExperienceIndex;
