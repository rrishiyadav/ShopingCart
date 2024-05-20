import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./Components/Menu";
import Home from "./Components/Home";
import Cart from "./Components/Cart";

export default function App(){
  
  
  return(
    <div>
     <BrowserRouter>
     <Menu/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/cart" element={<Cart/>}/>
     </Routes>
     </BrowserRouter>
    </div>
    
  )
}