import { Component } from "react";
import ApiService from "../../Service/Api-service";
import Overview from "../Overview";

class Reviews extends Component {
  state = {
    reviews: [],
  };

  async componentDidMount() {
    const resolve = await ApiService.fetchReviewsMovieID(
      this.props.id
    ).catch((error) => console.log(error));

    this.setState({ reviews: resolve });
  }

  render() {
    const { reviews } = this.state;
    return (
      <ul>
        {reviews.length
          ? reviews.map((review) => (
              <Overview key={review.id} review={review} />
            ))
          : "We don't have any reviews for this movie"}
      </ul>
    );
  }
}

export default Reviews;
