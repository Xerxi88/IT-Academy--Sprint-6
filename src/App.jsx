import Escena from './components/escena/Escena.jsx'
import { useEffect, useState } from 'react';


function App() {

  const [text, setText] = useState([])

  useEffect(() => {
    const fetchStories = async () => {
        const response = await fetch('stories.json');
        const data = await response.json();
        setText(data);
    }

    fetchStories();
  }, []);
 

  return (
    <div className="App">
      <Escena title={text}/>
    </div>
  );
}

export default App;
