import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "../components/navbars/Navbar";
import Support from "../pages/support_page/Support";
import OrderWater from "../pages/orderwater_page/OrderWater";
import WaterRide from "../pages/waterriderhome_page/WaterRide";

function Router() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<WaterRide />} />
        <Route path="/orderWater" element={<OrderWater />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
