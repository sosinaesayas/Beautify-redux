import Navbar from "./navbar/Navbar";
import {BrowserRouter as Router} from "react-router-dom"
import {Routes, Route} from "react-router-dom"
import Home from "./components/home";
import Pages from "./components/pages"
import Shop from "./components/shop"
import Product from "./components/product"
import Blog from "./components/blog"
import Contact from "./components/contact"
import Login from "./components/login"
import Wishlist from "./components/wishlist"
import Cart from "./components/cart"
import Footer from "./components/footer";


function App() {
  return (
    <Router>
       <div className="App">
      
          <Navbar/>
          <Routes>
            <Route path="/" element= {<Home/>}/>
            <Route path="/pages" element= {<Pages/>}/>
            <Route path="/shop" element= {<Shop/>}/>
            <Route path="/product" element= {<Product/>}/>
            <Route path="/blog" element= {<Blog/>}/>
            <Route path="/contact" element= {<Contact/>}/>
            <Route path="/login" element= {<Login/>}/>
            <Route path="/wishlist" element= {<Wishlist/>}/>
            <Route path="/cart" element= {<Cart/>}/> 
        </Routes>
        <Footer/>
          
     
      
     
    </div>
    </Router>
  );
}

export default App;
