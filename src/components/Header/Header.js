import React, { Component } from "react";
import MediaCard from "./TopicCards/Card";
import SliderCard from "./Slider/Slider";

class Header extends Component {
  render() {
    return (
      <div>
        <SliderCard />
        <MediaCard />
      </div>
    );
  }
}

export default Header;
