import { Component } from "react";
import Form from "../Components/Form";
import ApiService from "../Service/Api-service";
import GalleryMovies from "../Components/GalleryMovies";

class MoviesPage extends Component {
  state = {
    movies: [],
    location: this.props.location,
  };

  handleSearchMovies = async (search) => {
    const response = await ApiService.fetchSearchMovies(search).catch((error) =>
      console.log(error)
    );
    this.setState({ movies: response });
  };

  render() {
    const { movies, location } = this.state;
    return (
      <>
        <Form onHandleSearchMovies={this.handleSearchMovies} />
        <GalleryMovies movies={movies} location={location} />
      </>
    );
  }
}

export default MoviesPage;
