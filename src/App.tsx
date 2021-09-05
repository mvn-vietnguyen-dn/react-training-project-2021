import { Switch, Route } from "react-router-dom";

import { Auth } from "./pages/Auth";
import { Features } from "./pages/Features";

function App() {
  return (
    <Switch>
      <Route path="/auth">
        <Auth />
      </Route>
      <Route path="/">
        <Features />
      </Route>
    </Switch>
  );
}

export default App;
