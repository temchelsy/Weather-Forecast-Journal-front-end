import React from 'react';

const SingleEntry = ({ entry }) => {
  return (
    <div>
      <h3>{entry.date}</h3>
      <p>{entry.description}</p>

    </div>
  );
};

export default SingleEntry;