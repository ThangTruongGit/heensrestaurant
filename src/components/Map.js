import React from "react";
import { ReactBingmaps } from "react-bingmaps";

const BingMap = () => (
  <div className="w-100" style={{ height: "500px" }}>
    <ReactBingmaps
      bingmapKey="AjgEVboI0EmxD4i9b0nX9wf2nIemaRXmmy_LDudwE9UrwDS9RIhfLfOuNGX4hfZn"
      center={[51.359198, -0.191852]}
      zoom={19}
      infoboxes={[
        {
          location: [51.359198, -0.191852],
          option: {
            title: "Heens Resturant",
            description: "Chinese Oriental Cuisine",
            color: "red"
          }
        }
      ]}
    ></ReactBingmaps>
  </div>
);

export default BingMap;
