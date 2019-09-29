import React from 'react';
import Gauge from 'react-svg-gauge';

import useFetch from '../utils/useFetch';

import { List, ListItem, Title, Subtitle } from '../styles/styled'



const App = () => {
  const URL = 'https://api.carbonintensity.org.uk/generation'
  const initialState = {
    data: {}
  }

  const { data } = useFetch(URL, initialState);
  const { from, to, generationmix } = data.data;
  const fromDate = from && from.replace(/Z/gi, ' ').replace(/t/gi, ' ');
  const toDate = to && to.replace(/Z/gi, ' ').replace(/t/gi, ' ');

  return (
    <>
      <Title>GB Electricity National Grid Demand and Output per Production Type</Title>
      <Subtitle>last update from {fromDate} to {toDate}</Subtitle>
      <List>
        {generationmix && (
          generationmix.map(({ fuel, perc }, index) =>
            <ListItem key={index}>
              <Gauge value={perc} label={fuel} color='#B82601'/>
            </ListItem>
          ))}
      </List>
    </>
  )
};

export default App;