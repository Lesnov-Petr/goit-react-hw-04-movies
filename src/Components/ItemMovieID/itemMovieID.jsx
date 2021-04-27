import "./style.scss";

const ItemMovieID = ({
  title,
  overview,
  release_date,
  vote_average,
  backdrop_path,
  genres,
  onGoToBack,
}) => {
  const baseImgURL = backdrop_path
    ? `https://image.tmdb.org/t/p/w500${backdrop_path}`
    : "https://серебро.рф/img/placeholder.png";

  return (
    <>
      <button className="back" type="button" onClick={() => onGoToBack()}>
        Go to back
      </button>
      <div className="movie">
        <div className="box__img">
          <img className="movie__img" src={baseImgURL} alt={title} />
        </div>
        <div className="movie__description">
          <h1 className="movie__title">
            {title}({release_date.slice(0, 4)})
          </h1>
          <p className="movie__score">User score{vote_average}</p>
          <h2 className="movie__title">Overview</h2>
          <p className="movie__overview">{overview}</p>
          <h2 className="movie__title">Genres</h2>
          <ul className="movie__listGenres">
            {genres.map(({ name, id }) => (
              <li className="movie__genre" key={id}>
                {name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ItemMovieID;
