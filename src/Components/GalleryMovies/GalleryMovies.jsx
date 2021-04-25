import ItemMovie from "../ItemMovie";

const GalleryMovies = ({ movies, isLink }) => {
  return (
    <ul className="gallery">
      {movies.map((movie) => (
        <ItemMovie movie={movie} key={movie.id} isLink={isLink} />
      ))}
    </ul>
  );
};

export default GalleryMovies;
