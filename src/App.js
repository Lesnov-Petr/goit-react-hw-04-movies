import { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import Loader from "react-loader-spinner";
const HomePage = lazy(() => import("./views/HomePage"));
const MoviesPage = lazy(() => import("./views/MoviesPage"));
const MoviesDetailsPage = lazy(() => import("./views/MovieDetailsPage"));
const NotFoundView = lazy(() => import("./views/NotFoundView"));
const Navigation = lazy(() => import("./Components/NavLink"));

const App = () => {
  return (
    <div className="container">
      <Suspense
        fallback={
          <Loader type="Puff" color="#00BFFF" height={100} width={100} />
        }
      >
        <Navigation />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/movies/:movieID" component={MoviesDetailsPage} />
          <Route path="/movies" component={MoviesPage} />
          <Route component={NotFoundView} />
        </Switch>
      </Suspense>
    </div>
  );
};

export default App;
