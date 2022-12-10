const skills = require('../../models/skills.model');

function getAllSkills(req, res) {
  res.status(200).json(skills);
}

function getSkill(req, res) {
  const id = Number(req.params.id);
  const skill = skills[id];
  if (skill) {
    res.status(200).json(skill);
  } else {
    res.status(400).json({
      error: 'sorry you cannot go this route',
    });
  }
}
function postSkill(req, res) {
  if (!req.body.icon) {
    return res.status(404).json({
      error: 'not found',
    });
  }
  const newSkill = {
    id: skills.length,
    icon: req.body.icon,
    skill: req.body.skill,
  };

  skills.push(newSkill);
  res.json(newSkill);
}

module.exports = {
  getAllSkills,
  getSkill,
  postSkill,
};
