import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import Location from "./components/Locale/LocationCard/Location";
import Locale from "./components/Locale/Locale";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Header />
        <Locale />
      </div>
    );
  }
}

export default App;
