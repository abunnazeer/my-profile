import { Fragment, useState, useEffect } from 'react';

import IndexCard from '../../administration/IndexCard';
import IndexBody from '../../administration/IndexBody';
import IndexHeader from '../../administration/IndexHeader';

const Url = 'http://localhost:8000';
function SkillsIndex() {
  const [skill, setSkill] = useState([]);
  async function skillData(url) {
    const response = await fetch(url + '/skills');
    const data = await response.json();
    setSkill(data);
  }
  useEffect(() => {
    skillData(Url);
  }, []);
  return (
    <Fragment>
      <IndexHeader />

      {skill.map(function (item, id) {
        return <IndexCard name={item.skill} img={item.icon} key={id} />;
      })}
    </Fragment>
  );
}
export default SkillsIndex;
