import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Gauge from 'react-svg-gauge';

const URL = 'https://api.carbonintensity.org.uk/generation';

const App = () => {
  const [data, setData] = useState({data: {}});

  useEffect(async () => {
    const fetchData = async () => {
      const result = await axios(URL)
      setData(result.data);
    }
    fetchData();
  }, []);

  const { from, generationmix } = data.data;
  return (
    <ul>
      <h1>GB Electricity National Grid Demand and Output per Production Type</h1>
      <h4>last update {from}</h4>
        {generationmix && (
          generationmix.map(({ fuel, perc }, index) =>
            <li key={index}>
              <Gauge
                value={perc}
                width={250}
                height={250}
                label={fuel}
              />
          </li>
          ))}
    </ul>
  )
};

export {
    App
}