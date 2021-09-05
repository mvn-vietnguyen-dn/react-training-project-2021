import { Switch, Route } from "react-router-dom";

import { Login } from "./Login";

export const Auth = () => {
  return (
    <Switch>
      <Route path="/auth/login">
        <Login />
      </Route>
    </Switch>
  );
};
