
import React from 'react';

const EntryList = ({ entries }) => {
  return (
    <ul>
      {entries.map((entry) => (
        <li key={entry.id}>
          {entry.date} - {entry.description}
        </li>
      ))}
    </ul>
  );
};

export default EntryList;
