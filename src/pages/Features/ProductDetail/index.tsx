import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Layout, Breadcrumb, Rate, Space, Spin } from "antd";

import axiosInstance from "../../../core/services/api";
import { ProductProps } from "../../../components/Product";

const { Content } = Layout;

export const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const [productDetail, setProductDetail] = useState<ProductProps>();

  useEffect(() => {
    const fetchProductById = async () => {
      try {
        const product = await axiosInstance.get(`/products/${productId}`);
        setProductDetail(product.data);
      } finally {
        //
      }
    };
    fetchProductById();
  }, [productId]);

  return (
    <Content className="page-product-detail page-wrapper">
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link to="/">Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to="/products">Products</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Product {productId}</Breadcrumb.Item>
      </Breadcrumb>
      <h2 className="page-title">Product {productId}</h2>
      {productDetail ? (
        <div className="product-detail">
          <div className="product-image-wrapper">
            <img
              className="product-image"
              src={productDetail?.image}
              alt={productDetail?.title}
            />
          </div>
          <div className="product-content">
            <h3 className="product-title">{productDetail?.title}</h3>
            <p className="product-description">{productDetail?.description}</p>
            <h4 className="product-price">Price: {productDetail?.price} $</h4>
            <h4 className="product-price">
              Rating:
              <Rate
                className="ml-10"
                value={Math.ceil(productDetail?.rating?.rate || 0)}
              />
            </h4>
          </div>
        </div>
      ) : (
        <Space className="loading-spin">
          <Spin size="large" />
        </Space>
      )}
    </Content>
  );
};
