import axios from "axios";

const ApiService = {
  page: 1,
  myKeyAPI: "e1648943ec3f00b3b8db827b73df4be9",
  baseURL: (axios.defaults.baseURL = "https://api.themoviedb.org/3"),

  fetchTrandingMovies() {
    return axios
      .get(
        `${this.baseURL}/trending/movie/day?api_key=${this.myKeyAPI}&page=${this.page}`
      )
      .then(({ data }) => data.results);
  },

  fetchSearchMovies(search) {
    return axios
      .get(
        `${this.baseURL}/search/movie?query=${search}&api_key=${this.myKeyAPI}&page=${this.page}`
      )
      .then(({ data }) => data.results);
  },

  fetchInfoMovieID(id) {
    return axios
      .get(
        `${this.baseURL}/movie/${id}?api_key=${this.myKeyAPI}&page=${this.page}`
      )
      .then(({ data }) => data);
  },

  fetchActorsMovieID(id) {
    return axios
      .get(
        `${this.baseURL}/movie/${id}/credits?api_key=${this.myKeyAPI}&page=${this.page}`
      )
      .then((resolve) => resolve.data.cast);
  },

  fetchReviewsMovieID(id) {
    return axios
      .get(
        `${this.baseURL}/movie/${id}/reviews?api_key=${this.myKeyAPI}&page=${this.page}`
      )
      .then((resolve) => resolve.data.results);
  },
};

export default ApiService;
