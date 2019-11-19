import React from "react";
import { Slider, Typography } from "@material-ui/core/";

import "./RustOff.scss";

const marks = [
  {
    value: 3,
    label: "3 Cm"
  },
  {
    value: 7,
    label: "7 Cm"
  },
  {
    value: 15,
    label: "15 Cm"
  },
  {
    value: 30,
    label: "30 Cm"
  }
];

const RustOff = () => {
  return (
    <div className="rust">
      Удаление вмятин
      <Typography id="range-slider" gutterBottom>
        Temperature range
      </Typography>
      <Slider
        min="1"
        max="100"
        marks={marks}
        defaultValue="20"
        // onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        // getAriaValueText="some text"
      />
    </div>
  );
};

export default RustOff;
