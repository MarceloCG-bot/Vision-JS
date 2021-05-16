import React from "react";

const ScreenshotList = (props) => {
  return (
    props.images &&
    props.images.map(function(img, i) {
      return (
        <img key={i} style={{ margin: "1rem" }} alt="screenshot" src={img} />
      );
    })
  );
};

export default ScreenshotList;
