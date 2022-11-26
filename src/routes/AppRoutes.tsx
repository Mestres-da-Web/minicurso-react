import { Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import Details from "../pages/Details";
import Products from "../pages/Products";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Products />} />
        <Route path="/details" element={<Details />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
