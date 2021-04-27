import ItemMovie from "../ItemMovie";

const GalleryMovies = ({ movies, location }) => {
  return (
    <ul className="gallery">
      {movies.map((movie) => (
        <ItemMovie movie={movie} key={movie.id} location={location} />
      ))}
    </ul>
  );
};

export default GalleryMovies;
