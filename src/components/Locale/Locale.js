import React, { Component } from "react";
import LocationCard from "./LocationCard/Location";
import City from "./City/City.js";

class Locale extends Component {
  render() {
    return (
      <div>
        <LocationCard />
        <City />
      </div>
    );
  }
}

export default Locale;
