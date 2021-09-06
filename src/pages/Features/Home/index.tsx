import { Breadcrumb, Layout } from "antd";

const { Content } = Layout;

export const Home = () => {
  return (
    <Content className="page-home page-wrapper">
      <Breadcrumb>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
      </Breadcrumb>
      <h2 className="page-title">Home</h2>
      <img
        src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
        alt="Banner"
      />
    </Content>
  );
};
