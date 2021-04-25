import { Link } from "react-router-dom";
import "./style.scss";

const ItemMovie = ({ movie }) => {
  const {
    id,
    backdrop_path,
    title,
    release_date,
    original_title,
    vote_average,
  } = movie;

  const baseImgURL = backdrop_path
    ? `https://image.tmdb.org/t/p/w500${backdrop_path}`
    : "https://серебро.рф/img/placeholder.png";
  return (
    <li className="film-card">
      <Link to={`/movies/${id}`}>
        <div className="img-wrapper">
          <img className="film-img" src={baseImgURL} alt={title} />
        </div>
        <div className="film-box">
          <h3 className="film-title">{original_title}</h3>

          <p>
            <span className="film-rate">{vote_average}</span>
            <span className="film-text"> | {release_date}</span>
          </p>
        </div>
      </Link>
    </li>
  );
};

export default ItemMovie;
