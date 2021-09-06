import { FC } from "react";
import { useSelector } from "react-redux";
import { Redirect, Route, RouteProps } from "react-router-dom";

import { RootState } from "../../../store";

export const PrivateRoute: FC<RouteProps> = ({ children, ...rest }) => {
  const user = useSelector((state: RootState) => state.user.user);

  return (
    <Route
      {...rest}
      render={() => (user ? children : <Redirect to="/auth/login" />)}
    />
  );
};
