import React, { useState } from 'react';

import AddEntryForm from './Component/AddEntryForm';
import EntryList from './Component/EntryList';
import SingleEntry from './Component/SingleEntry';
import DeleteEntryButton from './Component/DeleteEntryButton';
// import EntryEdit from './Component/UpdaEntryForm';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AddEntryForm />
      {/* <DeleteEntryButton /> */}
      {/* <EntryList /> */}
      {/* <SingleEntry /> */}
      {/* <EntryEdit /> */}
    </>
  );
}

export default App;
