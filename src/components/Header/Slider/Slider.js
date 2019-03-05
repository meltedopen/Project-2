import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";

export default () => (
  <Carousel autoPlay>
    <div>
      <img src="hhttps://images.thrillophilia.com/image/upload/s--1iJ9svLu--/c_fill,f_auto,fl_strip_profile,h_775,q_auto,w_1600/v1/images/photos/000/103/523/original/1479889923_supersonic-bg-main.jpg.jpg?1479889923" />
      <p className="legend">Slayty Gaga!!</p>
    </div>
    <div>
      <img src="https://i.ytimg.com/vi/lGkqNVrgFWE/maxresdefault.jpg" />
      <p className="legend">Slayler Swift!!</p>
    </div>
    <div>
      <img src="https://i.ytimg.com/vi/lGkqNVrgFWE/maxresdefault.jpg" />
      <p className="legend">Slaylena Gomez!!</p>
    </div>
  </Carousel>
);
