import React, { useState } from 'react';

import Home from './Component/Home';
// import EntryList from './Component/EntryList';

;
// import EntryEdit from './Component/UpdaEntryForm';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Home />
      {/* <DeleteEntryButton /> */}
      {/* <EntryList /> */}
      {/* <SingleEntry /> */}
      {/* <EntryEdit /> */}
    </>
  );
}

export default App;
