import React, { Component } from "react";
import MediaCard from "./TopicCards/Card";
import Slider from "./Slider/Slider";

class Header extends Component {
  render() {
    return (
      <div>
        <Slider />
        <MediaCard />
      </div>
    );
  }
}

export default Header;
