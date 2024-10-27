import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Dashboard from "./pages/admin/dashboard";
import AddProduct from "./pages/admin/addproduct";
import Navbar from "./components/Navbar";
import AddEmployee from "./pages/addemployee";
import AddCustomer from "./pages/admin/addcustomer";
import Home from "./pages/Home";

function App() {
  return (
    <div className="w-full pb-6 bg-[#9a616d]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/admindashboard" element={<Dashboard />} />
        <Route path="/addproducts" element={<AddProduct />} />
        <Route path="/addemployee" element={<AddEmployee />} />
        <Route path="/addcustomer" element={<AddCustomer />} />
      </Routes>
    </div>
  );
}

export default App;
