import axios from 'axios';
// @ts-ignore
// import { config } from '../../config/constants';

export const login = ({ username, password }) => {
  const data = new FormData();
  data.append('username', username);
  data.append('password', password);
  return axios
    .post('/auth', data, {
      baseURL: 'http://localhost:8080',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(res => {
      return res.data;
    });
};
export const fetchInfo = async () => {
    const user = await axios.get('/userInfo').then(res => res.data);
    return {
      user
    };
  };

export const register = async (newUserData) => {
  axios.post("/register", newUserData)
}
const AuthAPI = {
  login,
  register,
  fetchInfo
};



export default AuthAPI;