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
        <header className="nav justify-content-center">
          <h1 className="my-3 fw-bold text-white">Captura de Imagem</h1>
        </header>

        <section className="container-fluid">
          <div className="row my-4 gap-4 d-flex justify-content-center">
            <div className="box card col-lg-4 justify-content-between shadow-sm">
              <h2 className="card-title fs-4 text-primary-2 text-center mb-3">
                Exibição
              </h2>
              <WebcamComponent
                updateImages={this.handleImageChange}
                images={this.state.images}
              />
              <div className="p-1 d-flex align-items-end justify-content-center mt-4" />
            </div>

            <div className="box card col-lg-3 shadow-sm">
              <h2 className="card-title fs-4 text-primary-2 text-center mb-3">
                Imagens Capturadas
              </h2>
              <div className="p-1 results">
                <ScreenshotList images={this.state.images}>
                  images
                </ScreenshotList>
              </div>
            </div>

            <div className="box card col-lg-4 justify-content-between shadow-sm">
              <h2 className="card-title fs-4 text-primary-2 text-center mb-3">
                Rotulação
              </h2>
              <img
                className="printscreen"
                alt="Printscreen da câmera de vídeo"
                src=""
              />
              <div className="p-1 d-flex align-items-end justify-content-center mt-4">
                <input
                  className="btn btn-warning shadow"
                  type="submit"
                  value="Salvar seleção"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
