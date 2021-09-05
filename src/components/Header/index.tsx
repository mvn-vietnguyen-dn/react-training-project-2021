import { Layout } from "antd";
import { useSelector } from "react-redux";
import { LogoutOutlined, HeartFilled } from "@ant-design/icons";

import { RootState } from "../../store";
import logo from "../../logo.svg";

const { Header: AntdHeader } = Layout;

export const Header = () => {
  const favouriteCount = useSelector(
    (state: RootState) => state.products.favouriteIds.length
  );

  return (
    <AntdHeader className="page-header">
      <h1 className="app-title">
        <img width="50" src={logo} alt="App logo" />
        React Training 2021
      </h1>
      <div>
        <span className="favourite-icon">
          <HeartFilled className="header-icon" />
          {!!favouriteCount && (
            <span className="favourite-count">{favouriteCount}</span>
          )}
        </span>
        <LogoutOutlined className="header-icon ml-15" />
      </div>
    </AntdHeader>
  );
};
