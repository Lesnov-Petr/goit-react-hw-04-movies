import { Component } from "react";
import ApiService from "../Service/Api-service";
import GalleryMovies from "../Components/GalleryMovies";

class Home extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const response = await ApiService.fetchTrandingMovies().catch((error) =>
      console.log(error)
    );

    this.setState({ movies: response });
  }

  render() {
    return <GalleryMovies movies={this.state.movies} />;
  }
}

export default Home;
