const Skills = require('../../models/skills.model');

async function getAllSkills(req, res) {
  const allSkills = await Skills.find();
  res.status(200).json(allSkills);
}

function getSkill(req, res) {
  const id = Number(req.params.id);
  const skill = Skills[id];
  if (skill) {
    res.status(200).json(skill);
  } else {
    res.status(400).json({
      error: 'sorry you cannot go this route',
    });
  }
}
async function postSkill(req, res) {
  try {
    const newSkill = await Skills.create({
      skill: req.body.skill,
      icon: req.body.icon,
    });
    res.status(201).json({
      status: 'success',
      data: {
        skill: newSkill,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
}

module.exports = {
  getAllSkills,
  getSkill,
  postSkill,
};
