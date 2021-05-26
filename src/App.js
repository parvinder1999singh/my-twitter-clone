import React from "react";
import Sidebar from './sidebar';
import Feed from './Feed';
import Widgets from "./Widgets";
import './App.css';


function App() {
  return (
    //BEM
    <div className="app">
      

      {/* {sidebar } */}
      <Sidebar />

      {/* {Feed} */}
      <Feed />
      {/* {widgets } */}
      <Widgets />
    </div>
  );
}

export default App;
