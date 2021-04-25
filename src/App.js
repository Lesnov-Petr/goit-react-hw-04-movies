import { Route, Switch } from "react-router-dom";
import HomePage from "./views/HomePage";
import MoviesPage from "./views/MoviesPage";
import MoviesDetailsPage from "./views/MovieDetailsPage";
import NotFoundView from "./views/NotFoundView";
import Navigation from "./Components/NavLink";

const App = () => {
  return (
    <div className="container">
      <Navigation />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/movies/:movieID" component={MoviesDetailsPage} />
        <Route path="/movies" component={MoviesPage} />
        <Route component={NotFoundView} />
      </Switch>
    </div>
  );
};

export default App;
