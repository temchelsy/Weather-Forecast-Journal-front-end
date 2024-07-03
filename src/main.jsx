// import React from 'react';
// import ReactDOM from 'react-dom';
// import { createRoot } from 'react-dom/client';
// import App from './App.jsx';
// import './index.css';
// import AddEntryForm from './Component/AddEntryForm';
// import EntryList from './Component/EntryList';
// import SingleEntry from './Component/SingleEntry';

// const root = document.getElementById('root');
// ReactDOM.createRoot(root).render(
//   <React.StrictMode>
//     <App />
   
//   </React.StrictMode>
// );


import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

