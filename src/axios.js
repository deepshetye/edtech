import axios from 'axios';
import store from './context/store';

const state = store.getState();

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
        'Content-type': 'application/json',
        'Authorization': `JWT ${store.getState().auth.access}`
    }
})

export const getCollegeList = async () => {
    let result;
    await axios
      .get(`https://edtech-dj.herokuapp.com/api/college/`, {
        params: {
          fields: "value,label"
        },
      })
      .then((res) => {
        result = res.data.results;
    });
    return result;
};

export const getBranchList = async (college) => {
    let result;
    await axios
      .get(`https://edtech-dj.herokuapp.com/api/college/${college}/`)
      .then((res) => {
        result = res.data;
    });
    return result;
};

export const getYearList = async (college) => {
  let result;
  await axios
    .get(`https://edtech-dj.herokuapp.com/api/college/${college}/`)
    .then((res) => {
      result = res.data;
  });
  return result;
};

export const updateUserProfile = async (data) => {
    await axiosInstance
      .put(`/auth/profile/me/`, data)
      .then(console.log("User data updated successfully"));
}

export const getBooks = async (book) => {
  let result;
  return result = await axiosInstance
  .get(`/api/textbook/${book}`)
}

export const getMaterials = async (book) => {
  let result;
  return result = await axiosInstance
  .get(`/api/material/${book}`)
}

export default axiosInstance