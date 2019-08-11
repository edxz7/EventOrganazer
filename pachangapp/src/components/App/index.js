import React from 'react';
import Navbar from "react-bootstrap/Navbar"
import logo from '../../assets/logo.svg';
import styles from "./index.module.css"

import Events from "../Events"




function App() {
  return (
    <div className={styles.App}>
      <Navbar bg="dark">
        <Navbar.Brand href="#home">
          <img
            src="/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
      </Navbar>
      <br />
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          {' PachangaApp'}
        </Navbar.Brand>
      </Navbar>
      <div className={styles.Main}>
        <Events />

      </div>
    </div>
  );
}

export default App;
