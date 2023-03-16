import Escena from "./components/escena/Escena.jsx";
import { useState } from "react";
import Boton from "./components/escena/Boton.jsx";
import "./App.css";
import stories from "./stories.json";

function App() {
  const [text, setText] = useState(stories);
  const [contador, setContador] = useState(1);

  const anterior = () => {
    if (contador >= 0) {
      setContador(contador - 1);
      console.log(contador);
      setText(
        text.map((texto) => {
          return contador === texto.id
            ? { ...texto, color: "pink" }
            : { ...texto, color: "white" };
        })
      );
    } else {
      setContador(0);
    }
  };
  const seguent = () => {
    if (contador < 4) {
      setContador(contador + 1);
      console.log(contador);
      setText(
        text.map((texto) => {
          return contador === texto.id
            ? { ...texto, color: "pink" }
            : { ...texto, color: "white" };
        })
      );
    } else {
      setContador(3);
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
          <div className="headerButton">
            <Boton text="Anterior" onClick={anterior} />
            <Boton text="Següent" onClick={seguent} />
          </div>

          {text.map((texto) => {
            return (
              <Escena
                key={texto.id}
                title={texto.frase}
                style={{ backgroundColor: texto.color,backgroundImage: texto.fondo }}
              />
            );
          })}
        </>
      )}
    </>
  );
}

export default App;
