
import React from 'react';

const EntryDetail = ({ entry }) => {
  return (
    <div>
      <h2>{entry.date}</h2>
      <p>{entry.description}</p>
      <p>Weather: {entry.weather}</p>
      <p>Temperature: {entry.temperature}°C</p>
    </div>
  );
};

export default EntryDetail;
