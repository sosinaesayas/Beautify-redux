import Navbar from "./components/navabr/Navbar";
import {BrowserRouter as Router} from "react-router-dom"
import {Routes, Route} from "react-router-dom"
import Home from "./Pages/home";
import Pages from "./Pages/pages"
import Shop from "./Pages/shop"
import Product from "./Pages/product"
import Blog from "./Pages/blog"
import Contact from "./Pages/contact"
import Login from "./Pages/login"
import Wishlist from "./Pages/wishlist"
import Cart from "./Pages/cart"
import Footer from "./Pages/footer";
import Blog1 from "./Pages/blogs/blog1";
import Register from "./Pages/register";
import Team from "./Pages/team";
import About from "./Pages/about";



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
            <Route path="/blog1" element={<Blog1/>}/>
            <Route path ="/about" element={<About/>}/>
            <Route path="/team" element={<Team/>}/>
            <Route path="/register" element={<Register/>}/>
        </Routes>
        <Footer/>
          
     
      
     
    </div>
    </Router>
  );
}

export default App;
