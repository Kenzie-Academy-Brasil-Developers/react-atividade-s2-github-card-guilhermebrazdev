import { useState } from "react";
import axios from "axios";

import "./pesq.css";

function Pesquisa({ repo, setRepo, erro, setErro }) {
  const [pesq, setPesq] = useState("");

  const submit = () => {
    // console.log(pesq);
    axios
      .get(`https://api.github.com/repos/${pesq}`)
      .then((response) => {
        // console.log(response);
        // console.log(JSON.stringify(repo), response.toString());
        setErro(false);
        setRepo([...repo, response]);
      })
      .catch((err) => {
        console.log("testing", err);
        setErro(true);
      });
  };

  return (
    <div id="pesquisa">
      <div id="pesqBox">
        <input
          id="pesqInput"
          type="text"
          onChange={(evt) => setPesq(evt.target.value)}
        />
        {erro && <p id="erro">Erro, Repositório Não Encontrado</p>}
        <button onClick={submit}>Pesquisar</button>
      </div>
    </div>
  );
}

export default Pesquisa;
