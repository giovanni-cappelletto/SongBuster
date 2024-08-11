import Illustration from "./Illustration.jsx";

const Card = ({ title = "Titolo", artist, year, type, owned, url }) => {
  return (
    <div className="card" data-owned={owned}>
      <div className="card_content">
        <h3 className="title">{title}</h3>

        <div className="info">
          <p>
            <span>Artista: </span>
            {artist}
          </p>
          <p>
            <span>Anno: </span>
            {year}
          </p>
          <p>
            <span>Tipo: </span>
            {type}
          </p>
        </div>
      </div>

      <a
        href={`https://www.youtube.com/results?search_query=${title.toLowerCase()}+${artist.toLowerCase()}`}
        target="_blank"
      >
        <Illustration url={url} title={title} />
      </a>
    </div>
  );
};

export default Card;
