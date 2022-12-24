const multer = require('multer');
const Projects = require('../../models/projects.model');
const slugify = require('slugify');

/// Image upload functinalities
const Storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/me');
  },
  // destination: 'public/assets/uploads',
  filename: (req, file, cb) => {
    cb(null, Date.now() + '__' + file.originalname);
  },
});

const upload = multer({
  storage: Storage,
});

const uploadImage = upload.single('imagepath');
async function getAllProjects(req, res) {
  try {
    const allProjects = await Projects.find();
    res.status(200).json(allProjects);
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
}

async function getProject(req, res) {
  try {
    const project = await Projects.findOne({ slug: req.params.slug });
    res.status(200).json({
      status: 'success',
      data: {
        project,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
}

async function postProject(req, res) {
  const slug = slugify(req.body?.title, {
    replacement: '-',
    lower: true,
  });
  try {
    const newProject = await Projects.create({
      title: req.body.title,
      imagepath: req.body.imagepath,
      github: req.body.github,
      demo: req.body.demo,
      node: req.body.node,
      react: req.body.react,
      express: req.body.express,
      slug: slug,
    });
    res.status(201).json({
      status: 'success',
      data: {
        project: newProject,
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
  getAllProjects,
  getProject,
  postProject,
  uploadImage,
};
