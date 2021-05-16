import React from "react";
import Webcam from "react-webcam";

const WebcamCapture = (props) => {
  const webcamRef = React.useRef(null);

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot({
      width: 416,
      height: 416,
    });
    props.updateImages(imageSrc);
  };

  return (
    <>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        height={500}
        width={494}
      />
      <button onClick={capture}>Capture photo</button>
    </>
  );
};

export default WebcamCapture;
