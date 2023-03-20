import Escena from "./components/escena/Escena.jsx";
import { useState } from "react";
import Boton from "./components/escena/Boton.jsx";
import "./App.css";
import { Fondo } from "./styled.js";
import stories from "./stories.json";

function App() {
  const [text] = useState(stories); // Borrado el setText porque no se utiliza en ningun momento.
  const [contador, setContador] = useState(1);

  const anterior = () => {
    if (contador >= 2) {
      setContador(contador - 1);
    }
  };
  const seguent = () => {
    if (contador <= 3) {
      setContador(contador + 1);
    }
  };

  const [inici, setInici] = useState(true);

  const iniciar = () => {
    setInici(false);
  };

  return (
    <>
      {inici && (
        <>
          <div className="portada">
            <h1 style={{ color: "white" }}>Aventures intergalàctiques</h1>
            <button className="boto" onClick={iniciar}>
              Iniciar història
            </button>
          </div>
        </>
      )}
      {!inici && (
        <>
          <Fondo className="full" style={{  backgroundImage: `url(${require(`./image/${contador}.jpg`)})`}}>
            <div className="headerButton">
              <Boton text="Anterior" onClick={anterior} />
              <Boton text="Següent" onClick={seguent} />
            </div>

            {text.map((texto) => {
              return contador === texto.id ? (
                <Escena
                  key={texto.id}
                  title={texto.frase}
                  style={{ backgroundColor: "pink", opacity: 1 }}
                />
              ) : (
                <Escena
                  key={texto.id}
                  title={texto.frase}
                  style={{
                    backgroundColor: texto.color,
                    opacity: texto.opacity,
                  }}
                />
              );
            })}
          </Fondo>
        </>
      )}
    </>
  );
}

export default App;
