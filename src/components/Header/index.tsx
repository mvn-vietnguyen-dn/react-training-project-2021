import { Layout } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { LogoutOutlined, HeartFilled } from "@ant-design/icons";
import { Link, useHistory } from "react-router-dom";

import logo from "../../logo.svg";
import { AppDispatch, RootState } from "../../store";
import { setUser } from "../../store/userSlice";

const { Header: AntdHeader } = Layout;

export const Header = () => {
  const history = useHistory();
  const dispatch = useDispatch<AppDispatch>();
  const favouriteCount = useSelector(
    (state: RootState) => state.products.favouriteIds.length
  );
  const user = useSelector((state: RootState) => state.user.user);

  const onLogout = () => {
    dispatch(setUser(null));
    history.push("/auth/login");
  };

  return (
    <AntdHeader className="page-header">
      <Link to="/">
        <h1 className="app-title">
          <img width="50" src={logo} alt="App logo" />
          React Training 2021
        </h1>
      </Link>
      <div>
        <span className="favourite-icon">
          <HeartFilled className="header-icon" />
          {!!favouriteCount && (
            <span className="favourite-count">{favouriteCount}</span>
          )}
        </span>
        {user && (
          <span className="ml-15 logout-icon" onClick={onLogout}>
            <span>Logout</span>
            <LogoutOutlined className="header-icon ml-5" />
          </span>
        )}
      </div>
    </AntdHeader>
  );
};
