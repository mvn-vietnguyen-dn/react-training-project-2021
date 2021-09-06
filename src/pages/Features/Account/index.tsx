import { Layout, Breadcrumb } from "antd";
import { Link } from "react-router-dom";

const { Content } = Layout;

export const Account = () => {
  return (
    <Content className="page-product-detail page-wrapper">
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link to="/">Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Account</Breadcrumb.Item>
      </Breadcrumb>
      <h2 className="page-title">Account</h2>
    </Content>
  );
};
