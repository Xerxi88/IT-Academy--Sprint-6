import Escena from "./components/escena/Escena.jsx";
import { useEffect, useState } from "react";

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

  return (
    <>
      <Escena title={text.frase1} />
      <Escena title={text.frase2} />
      <Escena title={text.frase3} />
      <Escena title={text.frase4} />
    </>
  );
}

export default App;
