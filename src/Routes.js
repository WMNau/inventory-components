import { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";

const Activities = lazy(() => import("./views/Activities"));
const Alerts = lazy(() => import("./views/Alerts"));
const Home = lazy(() => import("./views/Home"));
const Items = lazy(() => import("./views/Items"));
const Users = lazy(() => import("./views/Users"));

function Routes(props) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/items" component={Items} />
        <Route exact path="/alerts" component={Alerts} />
        <Route exact path="/activities" component={Activities} />
        <Route exact path="/users" component={Users} />
      </Switch>
    </Suspense>
  );
}

export default Routes;
