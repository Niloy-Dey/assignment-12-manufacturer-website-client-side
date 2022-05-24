import { Route, Router, Routes } from "react-router-dom";
import AddProduct from "./Component/AddProduct/AddProduct";
import AllTools from "./Component/AllTools/AllTools";
import Blog from "./Component/Blog/Blog";
import AddReview from "./Component/Dashboard/AddReview";
import AllOrder from "./Component/Dashboard/AllOrders";
import Dashboard from "./Component/Dashboard/Dashboard";
import MyOrder from "./Component/Dashboard/MyOrder";
import Payment from "./Component/Dashboard/Payment";
import Users from "./Component/Dashboard/Users";
import BusinessSummry from "./Component/Home/BusinessSummry";
import Home from "./Component/Home/Home";
import Review from "./Component/Home/Review";
import Login from "./Component/Login/Login";
import NotFound from "./Component/NotFound/NotFound";
import Purchase from "./Component/Purchase/Purchase";
import RequireAuth from "./Component/RequireAuth/RequireAuth";
import Signup from "./Component/Signup/Signup";
import Footer from "./Shared/Footer";
import Navbar from "./Shared/Navbar";

function App() {

  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>

        <Route path="/allTools" element={
          <RequireAuth>
            <AllTools></AllTools>
          </RequireAuth>
        }></Route>

        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
        <Route path="/purchase/:productId" element={<Purchase></Purchase>}></Route>
        <Route path="/Blog" element={<Blog></Blog>}></Route>
        <Route path="/BusinessSummry" element={<BusinessSummry></BusinessSummry>}></Route>
        <Route path="/review" element={<Review></Review>}></Route>

        <Route path="/addProduct" element={
          <RequireAuth>
            <AddProduct></AddProduct>
          </RequireAuth>
        }></Route>

        <Route path="/dashboard" element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }>
          <Route path="myOrders" element={<MyOrder></MyOrder>}></Route>
          <Route path="addReview" element={<AddReview></AddReview>}></Route>
          <Route path="payment" element={<Payment></Payment>}></Route>
          <Route path="allOrder" element={<AllOrder></AllOrder>}></Route>
          <Route path="users" element={<Users></Users>}></Route>

        </Route>

      </Routes>
      <Footer></Footer>
    </div>
  )
}
export default App;


