import axios from 'axios';

const API_URL = 'http://localhost:4000';

const login = async (account, password) => {
    try {
      const response = await axios.post(`${API_URL}/login`, {
        account,
        password,
      });
      const data = await response.data;
      console.log(data);
      if (data.accessToken) {
        localStorage.setItem(`user`, JSON.stringify(response.data));
      }
  
      return data;
    } catch (error) {
      return { error: error.response.data.message };
    }
  };

  const signup = async (firstname, lastname, username, email, password) => {
    try {
      const response = await axios.post(`${API_URL}/signup`, {
        firstname,
        lastname,
        username,
        email,
        password,
      });
      const data = await response.data;
      console.log(data);
      return data;
    } catch (error) {
      return { error: error };
    }
  }

  const authService = {
    login,
    signup
  }

  export default authService;