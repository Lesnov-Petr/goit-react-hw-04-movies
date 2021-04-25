import { Component } from "react";
import Form from "../Components/Form";
import ApiService from "../Service/Api-service";
import GalleryMovies from "../Components/GalleryMovies";

class MoviesPage extends Component {
  state = {
    movies: [],
  };

  handleSearchMovies = async (search) => {
    const response = await ApiService.fetchSearchMovies(search).catch((error) =>
      console.log(error)
    );
    this.setState({ movies: response });
  };

  render() {
    const { movies } = this.state;
    return (
      <>
        <Form onHandleSearchMovies={this.handleSearchMovies} />
        <GalleryMovies movies={movies} isLink={this.props.match.url} />
      </>
    );
  }
}

export default MoviesPage;
