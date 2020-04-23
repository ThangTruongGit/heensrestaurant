import React from "react";
import { ReactBingmaps } from "react-bingmaps";

const BingMap = () => (
  <div className="map-container">
    <ReactBingmaps
      bingmapKey="AjgEVboI0EmxD4i9b0nX9wf2nIemaRXmmy_LDudwE9UrwDS9RIhfLfOuNGX4hfZn"
      center={[51.359198, -0.191852]}
      zoom={19}
      pushPins={[
        {
          location: [51.359198, -0.191852],
          option: {
            title: "Heen's",
            subTitle: "Chinese Oriental Cuisine",
            color: "red"
          }
        }
      ]}
    ></ReactBingmaps>
  </div>
);

export default BingMap;
