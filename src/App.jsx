import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import WebcamComponent from "./components/webcam";
import ScreenshotList from "./components/screenshotList";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
    };

    this.handleImageChange.bind(this);
  }

  handleImageChange = (image) => {
    this.setState((state) => ({
      images: [...state.images, image],
    }));
  };

  render() {
    return (
      <div className="App">
        <ul class="nav justify-content-center">
          <h1>CAPTURE IMAGE</h1>
        </ul>

        <div class="divisao-wrap">
          <div class="divisao-camera">
            <div id="camera" />
            <div class="botao">
              <WebcamComponent
                updateImages={this.handleImageChange}
                images={this.state.images}
              />
            </div>
          </div>
          <div class="divisao-capturados">
            <div id="results">
              <ScreenshotList images={this.state.images}>images</ScreenshotList>
            </div>
          </div>
          <div class="croppie">
            <input type="file" name="fileUpload" id="fileUpload" />
            <div id="uploadedImage" />
            <img id="croppedImage" alt="cropping result" />
            <button class="btn btn-warning aviso" id="cropButton">
              Save Selection
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
