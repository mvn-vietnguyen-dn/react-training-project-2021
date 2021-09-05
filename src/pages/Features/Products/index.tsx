import {
  Breadcrumb,
  Col,
  Pagination,
  Row,
  Space,
  Spin,
  Layout,
  BackTop,
} from "antd";
import { useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import axiosInstance from "../../../core/services/api";
import { Product, ProductProps } from "../../../components/Product";
import { AppDispatch } from "../../../store";
import { filterFavouriteIds } from "../../../store/productSlice";

const { Content } = Layout;

export const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [productList, setProductsList] = useState<ProductProps[]>([]);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await axiosInstance.get("/products");
        setProductsList(products.data);
        dispatch(filterFavouriteIds(products.data));
      } finally {
        //
      }
    };
    fetchProducts();
  }, [dispatch]);

  const productsListWithPaging = useMemo(
    () => productList.slice((currentPage - 1) * 12, currentPage * 12),
    [productList, currentPage]
  );

  return (
    <Content className="page-products page-wrapper">
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link to="/">Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Products</Breadcrumb.Item>
      </Breadcrumb>
      <h2 className="page-title">Products List</h2>
      {productsListWithPaging?.length ? (
        <>
          <Row gutter={[24, 24]} className="products-list">
            {productsListWithPaging.map((product: ProductProps) => (
              <Col
                key={product?.id}
                md={{ span: 12 }}
                lg={{ span: 8 }}
                xl={{ span: 6 }}
              >
                <Product {...product} />
              </Col>
            ))}
          </Row>
          <Pagination
            hideOnSinglePage
            className="products-paginator"
            defaultCurrent={currentPage}
            current={currentPage}
            defaultPageSize={12}
            total={productList.length}
            onChange={(page: number) => setCurrentPage(page)}
          />
          <BackTop />
        </>
      ) : (
        <Space className="loading-spin">
          <Spin size="large" />
        </Space>
      )}
    </Content>
  );
};
