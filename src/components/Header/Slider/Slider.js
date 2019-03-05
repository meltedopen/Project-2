import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";

export default () => (
  <Carousel autoPlay>
    <div>
      <img href="blank.png" />
      <p className="legend">Slayty Gaga!!</p>
    </div>
    <div>
      <img href="blank.png" />
      <p className="legend">Slayler Swift!!</p>
    </div>
    <div>
      <img href="blank.png" />
      <p className="legend">Slaylena Gomez!!</p>
    </div>
  </Carousel>
);
