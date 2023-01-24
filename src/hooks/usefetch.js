import axios from "axios";
import { useEffect, useState } from "react";

/**
 * Hook for get data to API.
 * @param {string} service
 * @param {string} id
 * @returns {Object}
 */
export default function useFetch(id,service) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  let url = getUrl(id,service);
  
  useEffect(() => {
      setLoading('loading...')
      setData(null);
      setError(null);
      axios.get(url)
      .then(res => {
          setLoading(false);
          setData(res.data.data); 
      })
      .catch(err => {
          setLoading(false)
          setError(`An error ${err} occurred on fetch with ${service}`)
          console.log(error)
      })
      
  }, [error, service, url])

  return { data, loading, error }
}

/** get url for Hook useFetch
 * @param {string} service 
 * @param {string} id 
 * @returns {string} url 
 */
function getUrl(id, service) {
  let base_url = 'http://localhost:3000/user/'
  let url;
  switch (service) {
    case "userInfos":
      url = `${base_url}${id}`;
      break;
    case "performance":
      url = `${base_url}${id}/performance`;
      break;
    case "averageSessions":
      url = `${base_url}${id}/average-sessions`;
      break;
    case "activity":
      url = `${base_url}${id}/activity`;
      break;
    default:
      return null;
  }
  return url;
}