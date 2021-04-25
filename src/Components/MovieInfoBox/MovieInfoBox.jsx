import { Route, NavLink } from "react-router-dom";
import Cast from "../Cast";
import Reviews from "../Reviews";

const MovieInfoBox = ({ id }) => {
  return (
    <>
      <h3>Additional Information</h3>
      <NavLink to={`/movies/${id}/cast`}>Cast</NavLink>
      <NavLink to={`/movies/${id}/reviews`}>Reviews</NavLink>

      <Route
        path="/movies/:movieID/cast"
        render={(props) => <Cast {...props} id={id} />}
      />
      <Route
        path="/movies/:movieID/reviews"
        render={(props) => <Reviews {...props} id={id} />}
      />
    </>
  );
};

export default MovieInfoBox;
