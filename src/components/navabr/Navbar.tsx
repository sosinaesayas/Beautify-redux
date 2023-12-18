import React from 'react';
import { Link} from "react-router-dom";
import { useState } from 'react';
import "./Navbar.css";
import { IoIosArrowDown } from 'react-icons/io';



const  Navbar = () => {
  const [active, setactive] = useState("");
  const handleChange = (item: string) =>{
    setactive(item)
  }
  const [dropdownactive, setDropdownactive] = useState('');
  const chnageHandler = (item:string)=>{
    setDropdownactive(item)
  }
  const [isdropdownopen, setIsdropdownopen] = useState(false);
  const handleMouseInter = () =>{setIsdropdownopen(true)}
  const handleMouseLeave = ()=>{setIsdropdownopen(false)}
  return (
    <div className='header'>
      <div className='Navbar'>
          <div className='webName'>
            <h1>Beautify</h1>
          </div>

          <div>
            <ul className='real-nav'>

                <li>
                  <Link className={active === 'home' ? 'Active' : '' }
                   onClick={()=>handleChange('home')} 
                   to="/">Home</Link>
                 </li>
                <li onMouseEnter={handleMouseInter} onMouseLeave={handleMouseLeave}>
                 <Link id='pages' className={active === 'pages' ? 'Active' : '' } 
                   onClick={()=>handleChange('pages')}
                  to="/pages">Pages
                  <IoIosArrowDown className='dropdown-icon'/>
                  {isdropdownopen && 
                    <ul className='dropdown-list'>
                       <li><Link className={dropdownactive === "about"? 'dropdownActive': ""}
                        onClick={()=>chnageHandler('about')}
                         to="about">About</Link></li>
                       <li><Link className={dropdownactive === "team"? 'dropdownActive': ""}
                        onClick={()=>chnageHandler('team')}
                        to='team'>Team</Link></li>
                      <li><Link className={dropdownactive === "login"? 'dropdownActive': ""}
                      onClick={()=>chnageHandler('login')} 
                       to='login'>Login</Link></li>
                    </ul>
                  
                  }
                  </Link>
                  </li>
                <li>
                  <Link className={active==='shop'? 'Active' : ''} 
                  onClick={()=>handleChange('shop')}
                   to="/shop">Shop</Link>
                </li>
          
                <li>
                  <Link className={active === "blog"? 'Active': ""}
                  onClick={()=>handleChange('blog')}
                  to="/blog">Blog</Link>
                  </li>
                <li><Link className={active==="contact"? 'Active' : ""}
                onClick={()=>handleChange('contact')}
                to="/contact">Contact</Link>
                </li>
            </ul>
          </div>

          <div className='pseudo-nav'>
            <ul>
                <li>
                  <Link className={active === 'login'? 'Active': ''} 
                  onClick={()=>handleChange('login')}
                  to="/login">Login</Link>
                  </li>
                <li>
                  <Link id='wishlist' className={active === 'wishlist'? 'Active' : ''}
                  onClick={()=>handleChange('wishlist')}
                  to="/wishlist">Wishlist</Link>
                  </li>
                <li>
                  <Link className={active === "cart"? 'Active': ''}
                  onClick={()=>handleChange('cart')}
                  to="/cart">Cart</Link>
                  </li>
            </ul>
          </div>
    </div>
    </div>
  )
}

export default Navbar;
