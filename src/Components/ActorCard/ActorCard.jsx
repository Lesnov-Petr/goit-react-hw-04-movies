import "./style.scss";

const ActorCard = ({ actor }) => {
  const { profile_path, character } = actor;
  const baseURL = profile_path
    ? `https://image.tmdb.org/t/p/w500${profile_path}`
    : "https://серебро.рф/img/placeholder.png";
  return (
    <li className="itemActor">
      <img className="actorIMG" src={baseURL} alt={actor.name} />
      <p>{actor.name}</p>
      <p>Character: {character}</p>
    </li>
  );
};
export default ActorCard;
