import axios from "axios";
//linking the frontend to the backend
export default () => {
  return axios.create({
    baseURL: `http://localhost:5000/`,
  });
};
