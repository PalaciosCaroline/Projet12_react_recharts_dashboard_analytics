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

export const useApi = ({
  params: passedParams,
  defaultValue,
  callApi = callApiWithAxios
} = {}) => {
  const [params, setParams] = useState(passedParams || false);
  const [data, setData] = useState(defaultValue);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setError(null);

    try {
      setIsLoading(true);
      const res = await callApi({ ...params });
      setData(res.data);
      if (res.status >= 200 && res.status < 300) {
        params.callbackSuccess && params.callbackSuccess(res.data);
      }
    } catch (error) {
      setError(error);
      if (params.callbackFail) {
        params.callbackFail(error);
      } else {
        alert(
          `Une erreur s'est produite ${
            error.response ? `: ${error.response}` : ""
          }`
        );
      }
    } finally {
      setIsLoading(false);
    }
  }, [params, callApi]);

  useEffect(() => {
    Boolean(params) && fetchData();
  }, [params, fetchData]);

  return { data, setData, setParams, isLoading, error };
};


//Appel actuelle à l'api
const api = axios.create({
  baseURL: `http://localhost:3000`
});

/** function de récupération des données de l'api
 * @param {string} id 
 * @param {string} type 
 * @returns {promise} res.data
 */
export const getData = async (id, type) => {
  try {
    let res = {}
    switch (type) {
      case "activity":
        res = await api.get(`http://localhost:3000/user/${id}/activity`);
      break;
      case "averageSessions":
        res = await api.get(`http://localhost:3000/user/${id}/average-sessions`);
      break;
      case "performance":
        res = await api.get(`http://localhost:3000/user/${id}/performance`);
      break;
      case "mainInfos":
        res = await api.get(`http://localhost:3000/user/${id}`);
      break;
      default: 
      return res = null;
    }
    return res.data;
  } catch (e) {
    console.log(e);
  }
}