const experiences = require('../../models/experiences.model');

function getAllExperiences(req, res) {
  res.status(200).json(experiences);
}

function getExperience(req, res) {
  const id = Number(req.params.id);
  const experience = experiences[id];
  if (experience) {
    res.status(200).json(experience);
  } else {
    res.status(400).json({
      error: 'content cannot be found',
    });
  }
}

function postExperience(req, res) {
  if (!req.body.expTitle) {
    return res.status(404).json({
      error: 'you cannot submit blank data',
    });
  }
  const newExperience = {
    id: experiences.length,
    expDate: req.body.expDate,
    expTitle: req.body.expTitle,
    expCompany: req.body.expCompany,
  };
  experiences.push(newExperience);
  res.json(newExperience);
}

module.exports = {
  getAllExperiences,
  getExperience,
  postExperience,
};
