import { Route, NavLink } from "react-router-dom";
import Cast from "../Cast";
import Reviews from "../Reviews";

const MovieInfoBox = ({ id, isLocation }) => {
  return (
    <>
      <h3>Additional Information</h3>
      <NavLink
        to={{
          pathname: `/movies/${id}/cast`,
          state: isLocation.state,
        }}
      >
        Cast
      </NavLink>
      <NavLink
        to={{
          pathname: `/movies/${id}/reviews`,
          state: isLocation.state,
        }}
      >
        Reviews
      </NavLink>

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
