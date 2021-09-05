import { Breadcrumb, Layout } from "antd";

const { Content } = Layout;

export const Home = () => {
  return (
    <Content className="page-home page-wrapper">
      <Breadcrumb>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
      </Breadcrumb>
      <h2 className="page-title">Home</h2>
    </Content>
  );
};
