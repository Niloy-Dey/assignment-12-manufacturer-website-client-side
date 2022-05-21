import { Route, Router, Routes } from "react-router-dom";
import AllTools from "./Component/AllTools/AllTools";
import Home from "./Component/Home/Home";
import Login from "./Component/Login/Login";
import NotFound from "./Component/NotFound/NotFound";
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
        <Route path="/allTools" element={<AllTools></AllTools>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/dashboard" element={<></>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
        
      </Routes>
      <Footer></Footer>
    </div>
  )
}
export default App;


