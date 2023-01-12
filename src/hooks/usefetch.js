// import { useParams } from "react-router";
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





export const getUserPerformance = async (id) => {
  try {
    const res = await api.get(`http://localhost:3000/user/${id}/performance`);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};


export function useApi2(userId) {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);


  useEffect(() => {
    if (!userId) return;

    setIsLoading(true);

    async function fetchData() {
      try {
        const url = `http://localhost:3000/user/${userId}`;
      
        const response = await fetch(url);
        const data = await response.json();
       

        setData(data);
      } catch (err) {
        console.error(`An error occured while fetching`);

        setError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [userId]);

  return { data, isLoading, error };
}


//Appel actuelle à l'api
const api = axios.create({
  baseURL: `http://localhost:3000/user`
});


export const getData = async (id, type) => {
  try {
    let res = {}
  switch (type) {
    case "activity":
       res = await api.get(`http://localhost:3000/user/${id}/activity`);
      break;
    case "performance":
     res = await api.get(`http://localhost:3000/user/${id}/performance`);
      break;
    case "averageSessions":
      res = await api.get(`http://localhost:3000/user/${id}/average-sessions`);
      break;
    case "mainInfos":
      res = await api.get(`http://localhost:3000/user/${id}`);
      break;
      default: 
      res = null;
  }
  return res.data;
} catch (e) {
  console.log(e);
}}