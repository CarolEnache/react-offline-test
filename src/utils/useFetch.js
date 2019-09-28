import { useState, useEffect } from 'react';
import axios from 'axios';


const useFetch = (url, initialState) => {
  const [data, setData] = useState(initialState);

  useEffect(() => {
    const fetchData = async function() {
      try {
        const response = await axios.get(url);
        if (response.status === 200) {
          setData(response.data);
        }
      } catch(error){
        throw error;
      }
    };
    fetchData();
  }, [url]);

  return { data };
};

export default useFetch;