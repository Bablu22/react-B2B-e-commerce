import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";

function App() {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Products />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>
}

export default App;
