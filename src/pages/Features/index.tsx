import { Layout } from "antd";
import { Switch, Route } from "react-router-dom";

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { PrivateRoute } from "../../core/guards/PrivateRoute";

import { Home } from "./Home";
import { Products } from "./Products";
import { ProductDetail } from "./ProductDetail";
import { Account } from "./Account";

export const Features = () => {
  return (
    <Layout style={{ height: "100%" }}>
      <Header />
      <Layout>
        <Sidebar />
        <Layout className="layout-content">
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/products/:productId">
              <ProductDetail />
            </Route>
            <Route path="/products">
              <Products />
            </Route>
            <PrivateRoute path="/account">
              <Account />
            </PrivateRoute>
          </Switch>
          <Footer />
        </Layout>
      </Layout>
    </Layout>
  );
};
