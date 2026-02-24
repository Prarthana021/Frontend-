import {Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar.jsx";

import Home from "./pages/Home.jsx";
import Shop from "./pages/Shop.jsx";
import About from "./pages/About.jsx";
import Cart from "./pages/Cart.jsx";
import Checkout from "./pages/Checkout.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";

function App(){
    return (
        <>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />}/> 
            <Route path ="/shop" element={<Shop/>}/>
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/product/:id" element={<ProductDetails />} />
           
        </Routes>
        </>
    )
}

export default App
