import axios from 'axios';

const baseURL = 'http://wedding.austinmcrane.me:8080/api/v1';
//const baseURL = 'http://localhost:8888/api/v1';


const getAllPosts = () => {
  const url = `${baseURL}/posts`;
  return axios({
    method: 'get',
    url,
  });
};

const getAllTimelines = () => {
  const url = `${baseURL}/timelines`;
  return axios({
    method: 'get',
    url,
  });
};

const createPost = (body, imageName, imageBaseString) => {
  return axios({
    method: 'POST',
    url: `${baseURL}/posts`,
    data: {
      body,
      imageName,
      image: imageBaseString,
    },
  });
};

const rsvpUser = (name) => {
  return axios({
    method: 'PATCH',
    url: `${baseURL}/guests/rsvp?name=${name}`
  });
};

const getAllLocations = () => {
  return axios({
    method: 'get',
    url: `${baseURL}/locations`
  });
};

export {
  getAllPosts,
  createPost,
  rsvpUser,
  getAllLocations,
  getAllTimelines,
};
