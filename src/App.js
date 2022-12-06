import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Account from "./pages/Account";
import Customers from "./pages/Customers";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Manage from "./pages/Manage";
import Orders from "./pages/Orders";
import Products from "./pages/Products";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/products" element={<Products />} />
            <Route path="/manage" element={<Manage />} />
            <Route path="/account" element={<Account />} />
            <Route path="/customers" element={<Customers />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
