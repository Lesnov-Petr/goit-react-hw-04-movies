import { Component } from "react";
import ApiService from "../Service/Api-service";
import GalleryMovies from "../Components/GalleryMovies";

class Home extends Component {
  state = {
    movies: [],
    location: this.props.location,
  };

  async componentDidMount() {
    const response = await ApiService.fetchTrandingMovies().catch((error) =>
      console.log(error)
    );

    this.setState({ movies: response });
  }

  render() {
    const { movies, location } = this.state;
    return <GalleryMovies movies={movies} location={location} />;
  }
}

export default Home;
