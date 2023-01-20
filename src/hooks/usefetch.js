import axios from "axios";

const api = axios.create({
  baseURL: `http://localhost:3000`
});

/** function get to datas of API
 * @param {string} id 
 * @param {string} type 
 * @returns {promise} res.data.data
 */
export const getData = async (id, type) => {
  try {
    let result = {}
    switch (type) {
      case "activity":
        result = await api.get(`http://localhost:3000/user/${id}/activity`);
      break;
      case "averageSessions":
        result = await api.get(`http://localhost:3000/user/${id}/average-sessions`);
      break;
      case "performance":
        result = await api.get(`http://localhost:3000/user/${id}/performance`);
      break;
      case "mainInfos":
        result = await api.get(`http://localhost:3000/user/${id}`);
      break;
      default: 
      return result = null;
    }
    return result.data.data;
  } catch (error) {
    console.log('error', error);
  }
}