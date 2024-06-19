
import React, { useState } from 'react';

const EntryForm = ({ addEntry }) => {
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    await addEntry({ date, description })
    setDate('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add Entry</button>
    </form>
  );
};

export default EntryForm;
