import { FC, useCallback, useState } from "react";
import { NavLink } from "react-router-dom";
import { Layout, Menu } from "antd";
import { CarOutlined, HomeOutlined } from "@ant-design/icons";

const { Sider } = Layout;
const { Item: MenuItem } = Menu;

export const Sidebar: FC = () => {
  const [selectedKeys, setSelectedKeys] = useState<string>("");

  const isNavLinkActive = useCallback((match) => {
    if (match) {
      setSelectedKeys(match.url || "/");
    }
    return !!match;
  }, []);

  return (
    <Sider className="page-sidebar">
      <Menu
        theme="dark"
        mode="inline"
        forceSubMenuRender
        defaultSelectedKeys={["/"]}
        selectedKeys={[selectedKeys]}
      >
        <MenuItem key="/" icon={<HomeOutlined />}>
          <NavLink to="/" isActive={isNavLinkActive}>
            Home
          </NavLink>
        </MenuItem>
        <MenuItem key="/products" icon={<CarOutlined />}>
          <NavLink to="/products" isActive={isNavLinkActive}>
            Products
          </NavLink>
        </MenuItem>
      </Menu>
    </Sider>
  );
};
