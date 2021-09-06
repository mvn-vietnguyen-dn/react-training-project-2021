import { Switch, Route } from "react-router-dom";
import { Layout } from "antd";

import { Login } from "./Login";

export const Auth = () => {
  return (
    <Layout style={{ height: "100%" }}>
      <Switch>
        <Route path="/auth/login">
          <Login />
        </Route>
      </Switch>
    </Layout>
  );
};
