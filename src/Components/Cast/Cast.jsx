import { Component } from "react";
import ApiService from "../../Service/Api-service";
import ActorCard from "../ActorCard";

class Cast extends Component {
  state = {
    actors: [],
  };

  async componentDidMount() {
    const resolve = await ApiService.fetchActorsMovieID(
      this.props.id
    ).catch((error) => console.log(error));
    this.setState({ actors: resolve });
  }

  render() {
    const { actors } = this.state;
    return (
      <ul>
        {actors.map((actor) => (
          <ActorCard key={actor.id} actor={actor} />
        ))}
      </ul>
    );
  }
}

export default Cast;
