import "./app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WebcamComponent from "./components/webcam";

function App() {
  return (
    <div className="App">
      <header className="nav justify-content-center">
        <h1 className="my-4 fw-bold text-white">Captura de Imagem</h1>
      </header>

      <section className="container-fluid">
        <div className="row my-4">
          <div className="box col-md mx-4 justify-content-between">
            <WebcamComponent />
            <div className="d-flex justify-content-center">
              <button onclick="takeSnapshot()" class="btn btn-primary">
                Capturar imagem
            </button>
            </div>
          </div>

          <div className="box col-md">
            <div className="results" />
          </div>

          <div className="box col-md mx-4 justify-content-end">
            <div id="uploadedImage" />
            <img id="croppedImage" alt="cropping result" />
            <div className="d-flex justify-content-center">
              <button class="btn btn-warning" id="cropButton">
                Salvar seleção
            </button>
            </div>
          </div>
        </div>
      </section>

      <script src="https://cdnjs.cloudflare.com/ajax/libs/webcamjs/1.0.26/webcam.min.js" />
    </div>
  );
}

export default App;
