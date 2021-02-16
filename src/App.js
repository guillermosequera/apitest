import React from 'react';

import injectContext from "./store/appContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './Routes';


function App() {
  return (
    <div className="App">
      <Routes/>
    </div>
  );
}

export default injectContext(App);
