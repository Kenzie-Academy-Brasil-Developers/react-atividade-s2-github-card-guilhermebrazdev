import { useState } from "react";

import Pesquisa from "./components/Pesquisa";
import Card from "./components/Card";

import "./App.css";

function App() {
  const [repo, setRepo] = useState([]);
  const [erro, setErro] = useState(false);

  return (
    <div className="App">
      <div id="program">
        <Pesquisa repo={repo} setRepo={setRepo} erro={erro} setErro={setErro} />
        <Card repo={repo} />
      </div>
    </div>
  );
}

export default App;
