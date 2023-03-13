import Escena from "./components/escena/Escena.jsx";
import { useEffect, useRef, useState } from "react";
import Boton from "./components/escena/Boton.jsx";
import "./App.css";

function App() {
  const [text, setText] = useState([]);

  useEffect(() => {
    const fetchStories = async () => {
      const response = await fetch("stories.json");
      const data = await response.json();
      setText(data);
    };

    fetchStories();
  }, []);

  const anterior = () => {
    alert("Click en anterior");
  };
  const seguent = () => {
    alert("Click en següent");
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
              <h1 style={{color:"white"}}>Aventures intergalàctiques</h1>
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
          <Escena title={text.frase1} style={{ backgroundColor: "pink" }} />
          <Escena title={text.frase2} />
          <Escena title={text.frase3} />
          <Escena title={text.frase4} />
        </>
      )}
    </>
  );
}

export default App;
