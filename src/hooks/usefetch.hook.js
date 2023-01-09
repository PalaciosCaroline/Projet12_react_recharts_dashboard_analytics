// import { useParams } from "react-router";
import { useState, useEffect, useCallback } from "react";
import Axios from "axios";

export const callApiWithAxios = async ({
  method = "get",
  apiUrl = "http://localhost:3000/user/",
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
  return await Axios({
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