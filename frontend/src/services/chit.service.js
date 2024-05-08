import axios from 'axios';

const API_URL = 'http://localhost:4000';

const chit = async (user, content, time) => {
  try {
    const response = await axios.post(`${API_URL}/chit`, {
      user,
      content,
      time,
    });
    const data = await response.data;
    return data;
  }
    catch (error) {
      console.log(error)
      if (error.response) {
        return { error: error };
      }
    }
}

const getchits = async () => {
  try {
    const response = await axios.get(`${API_URL}/getchits`);
    const data = await response.data;
    return data;
  }
    catch (error) {
      console.log(error)
      return { error: error.response.data.message };
    }
}

const chitService = {
    chit,
    getchits,
  }

  export default chitService;
