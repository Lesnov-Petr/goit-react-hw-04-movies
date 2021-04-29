import { Component } from "react";
import ApiService from "../Service/Api-service";
import ItemMovieID from "../Components/ItemMovieID";
import MovieInfoBox from "../Components/MovieInfoBox";

class MoviesDetailsPage extends Component {
  state = {
    id: "",
    title: null,
    overview: null,
    release_date: "",
    vote_average: null,
    backdrop_path: null,
    genres: [],
  };

  async componentDidMount() {
    const movieID = Number(this.props.match.params.movieID);
    const response = await ApiService.fetchInfoMovieID(movieID).catch((error) =>
      console.log(error)
    );
    this.setState({ ...response });
  }

  handleGoToBack = () => {
    const { location, history } = this.props;

    history.push(location?.state?.from || "/");
  };

  render() {
    const {
      id,
      title,
      overview,
      release_date,
      vote_average,
      backdrop_path,
      genres,
    } = this.state;
    const { location } = this.props;
    return (
      <>
        <ItemMovieID
          title={title}
          overview={overview}
          release_date={release_date}
          vote_average={vote_average}
          backdrop_path={backdrop_path}
          genres={genres}
          onGoToBack={this.handleGoToBack}
        />
        <MovieInfoBox id={id} isLocation={location} />
      </>
    );
  }
}

export default MoviesDetailsPage;
