import "./app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WebcamComponent from "./components/webcam";

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <header className="nav justify-content-center">
=======
            <header className="nav justify-content-center">
>>>>>>> 3e0ea7312aabe2d5997acd5311284e017d58a8f8
        <h1 className="my-4 fw-bold text-white">Captura de Imagem</h1>
      </header>

      <section className="container-fluid">
        <div className="row my-4">
<<<<<<< HEAD
          <div className="box col-md mx-4 justify-content-between">
            <WebcamComponent />
            <div className="d-flex justify-content-center">
              <button onclick="takeSnapshot()" class="btn btn-primary">
                Capturar imagem
=======
          <div className="box col mx-4 justify-content-between">
              <WebcamComponent />
            <button onclick="takeSnapshot()" class="btn btn-primary">
              Capturar imagem
            </button>
          </div>

          <div className="box col">
            <div className="results" />
          </div>

          <div className="box col mx-4 justify-content-end">
            <div id="uploadedImage" />
            <img id="croppedImage" alt="cropping result" />
            <button class="btn btn-warning aviso" id="cropButton">
              Salvar seleção
>>>>>>> 3e0ea7312aabe2d5997acd5311284e017d58a8f8
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
