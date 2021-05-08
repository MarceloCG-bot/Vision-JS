import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WebcamComponent from "./components/webcam";

function App() {
  return (
    <div className="App">
      <ul class="nav justify-content-center">
        <h1>CAPTURE IMAGE</h1>
      </ul>

      <div class="divisao-wrap">
        <div class="divisao-camera">
          <div id="camera" />
          <div class="botao">
            <WebcamComponent />
            <button onclick="takeSnapshot()" class="btn btn-primary">
              CAPTURE IMAGE
            </button>
          </div>
        </div>
        <div class="divisao-capturados">
          <div id="results" />
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
      <script src="https://cdnjs.cloudflare.com/ajax/libs/webcamjs/1.0.26/webcam.min.js" />
    </div>
  );
}

export default App;
