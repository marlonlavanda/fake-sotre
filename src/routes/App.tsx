import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Layout } from "../shared/components/Layout";
import Home from "../pages/Home";
import ProductDetails from "../pages/ProductDetails";
const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
