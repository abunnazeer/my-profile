const { default: axios } = require('axios');

const uploadData = async data => {
  try {
    const url = 'http://localhost:8000/projects';
    const res = await axios({
      method: 'post',
      url,
      data,
    });
    console.log(res);
  } catch (error) {
    console.log('errror');
  }
};

export default uploadData;
