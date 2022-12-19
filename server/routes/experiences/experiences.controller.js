const Experiences = require('../../models/experiences.model');

async function getAllExperiences(req, res) {
  const allExperiences = await Experiences.find();
  res.status(200).json(allExperiences);
}

function getExperience(req, res) {
  const id = Number(req.params.id);
  const experience = Experiences[id];
  if (experience) {
    res.status(200).json(experience);
  } else {
    res.status(400).json({
      error: 'content cannot be found',
    });
  }
}

async function postExperience(req, res) {
  try {
    const newExperience = await Experiences.create({
      duration: req.body.duration,
      jobTitle: req.body.jobTitle,
      companyName: req.body.companyName,
    });
    res.status(201).json({
      status: 'success',
      data: {
        experience: newExperience,
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
  getAllExperiences,
  getExperience,
  postExperience,
};
