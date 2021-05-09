import "./app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WebcamComponent from "./components/webcam";

function App() {
  return (
    <div className="App">
      <header className="nav justify-content-center">
        <h1 className="my-3 fw-bold text-white">Captura de Imagem</h1>
      </header>

      <section className="container-fluid">
        <div className="row my-4">
          <div className="box card col-md mx-4 justify-content-between shadow-sm">
            <h2 className="card-title fs-4 text-primary-2 text-center mb-3">Exibição</h2>
            <WebcamComponent />
            <div className="card-body d-flex align-items-end justify-content-center mt-4">
              <button onclick="takeSnapshot()" className="btn btn-primary shadow">
                Capturar imagem
            </button>
            </div>
          </div>

          <div className="box card col-md shadow-sm">
            <h2 className="card-title fs-4 text-primary-2 text-center mb-3">Imagens Capturadas</h2>
            <div className="card-body results" />
          </div>

          <div className="box card col-md mx-4 justify-content-between shadow-sm">
            <h2 className="card-title fs-4 text-primary-2 text-center mb-3">Rotulação</h2>
            <img className="printscreen" alt="Printscreen da câmera de vídeo" src="" />
            <div className="card-body d-flex align-items-end justify-content-center mt-4">
                <input className="btn btn-warning shadow" type="submit" value="Salvar seleção" />
            </div>
          </div>
        </div>
      </section>

      <script src="https://cdnjs.cloudflare.com/ajax/libs/webcamjs/1.0.26/webcam.min.js" />
    </div>
  );
}

export default App;
