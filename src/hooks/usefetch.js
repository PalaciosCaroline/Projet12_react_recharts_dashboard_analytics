import { useState, useEffect, useCallback } from "react";
import axios from "axios";

export const callApiWithAxios = async ({
  method = "get",
  apiUrl = "http://localhost:3000/user",
  userId,
  namespace,
  payload,
  headers: passedHeaders
}) => {
  const config = {
    headers: {
      "Content-type": "application/json",
      ...passedHeaders
    }
  };
  const path = [apiUrl, userId, namespace].filter(Boolean).join("/");
  return await axios({
    method,
    url: path,
    data: payload,
    headers: config.headers
  });
};



//Appel actuelle à l'api
const api = axios.create({
  baseURL: `http://localhost:3000`
});

/** function de récupération des données de l'api
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