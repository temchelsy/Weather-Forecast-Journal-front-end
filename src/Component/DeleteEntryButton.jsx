import React from 'react';

const DeleteEntryButton = ({ entry, onDeleteEntry }) => {
  const handleDelete = () => {
     onDeleteEntry(entry.id);
  };

  return <button onClick={handleDelete}>Delete Entry</button>;
};

export default DeleteEntryButton;

