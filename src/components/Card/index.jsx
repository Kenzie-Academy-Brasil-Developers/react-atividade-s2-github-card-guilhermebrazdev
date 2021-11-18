import "./card.css";

function Card({ repo }) {
  console.log("show", repo);

  return (
    <div id="card">
      <div>
        {repo.length > 0 && (
          <div id="cardBox">
            {repo.map((element, index) => (
              <div id="singleCard" key={index}>
                <img
                  id="image"
                  src={element.data.owner.avatar_url}
                  alt="Foto do repo"
                />
                <div id="descricao">
                  <h1 id="title">{element.data.full_name}</h1>
                  <p>{element.data.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;
