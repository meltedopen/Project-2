import styles from "../Header/Header.css";
import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { default as Carousel, default as Slider } from "./Slider/Slider";
import MediaCard from "./TopicCards/Card";

class Header extends Component {
  render() {
    return (
      <div>
        <Carousel className={styles.Carousel} />
        {/* <Slider /> */}
        <hr />
        <MediaCard />
      </div>
    );
  }
}

export default Header;
