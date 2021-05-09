import React from "react";
import Webcam from "react-webcam";

    const WebcamCapture = () => {
        const webcamRef = React.useRef(null);
        const [imgSrc, setImgSrc] = React.useState(null);
        const [imageList] = React.useState([]);
      
        const capture = React.useCallback(() => {
          const imageSrc = webcamRef.current.getScreenshot({width: 416, height: 416});
          imageList.push(imageSrc)
          setImgSrc(imageSrc);
        }, [webcamRef, setImgSrc]);
      
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
            {imgSrc && (
                imageList.map(img =>  <img src={img}/> )
            )}
          </>
        );
      };
            
export default WebcamCapture;