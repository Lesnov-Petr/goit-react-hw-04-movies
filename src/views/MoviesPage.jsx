import { Component } from "react";
import Form from "../Components/Form";
import ApiService from "../Service/Api-service";
import GalleryMovies from "../Components/GalleryMovies";

class MoviesPage extends Component {
  state = {
    movies: [],
    location: {},
    searchLocation: this.props.location?.search || "",
  };

  componentDidMount() {
    const { searchLocation } = this.state;

    searchLocation && this.handleSearchMovies(searchLocation);
  }

  handleSearchMovies = async (search) => {
    const { location, history } = this.props;
    const response = await ApiService.fetchSearchMovies(search).catch((error) =>
      console.log(error)
    );

    if (location.search !== `?query=${search}`) {
      history.push({
        search: `?query=${search}`,
      });
    }
    this.setState({
      movies: response,
      location: location,
      searchLocation: search,
    });
    location.search = `${search}`;
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
