import './App.css';
import React from "react";


// components
import Navbar from "./components/Navbar"

function App() {

  return (
    <div className="App-header">
      
      <div className="h-nav">
        <div className="navbar-brand"></div>
        {/* Navbar */}
          <React.Fragment>
            <Navbar/>
          </React.Fragment>

      </div>

      <div className="h-logo">
        
      </div>

      <div className="h-slide">
        {/* slide promos */}
      </div>

      <div className="h-list-products">

      </div>

      <div className="h-footer">
        {/* footer */}
      </div>
    </div>
  );
}

export default App;
