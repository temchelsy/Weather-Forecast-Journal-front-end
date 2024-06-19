
import React, { useState } from 'react';

const EntryEdit = ({ entry, updateEntry }) => {
  const [description, setDescription] = useState(entry.description);

  const handleUpdate = async () => {
    
    await updateEntry(entry.id, { description });
  };

  return (
    <div>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleUpdate}>Update Entry</button>
    </div>
  );
};

export default EntryEdit;
