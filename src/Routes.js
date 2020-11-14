import { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";

const Home = lazy(() => import("./views/Home"));
const Items = lazy(() => import("./views/Items"));
const Alerts = lazy(() => import("./views/Alerts"));
const Activities = lazy(() => import("./views/Activities"));
const Users = lazy(() => import("./views/Users"));

function Routes() {
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
