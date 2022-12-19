const mongoose = require('mongoose');

const sillSchema = new mongoose.Schema({
  skill: {
    type: String,
    required: true,
    unique: true,
  },
  icon: {
    type: String,
    required: true,
  },
});
const Skill = mongoose.model('Skill', sillSchema);
module.exports = Skill;
