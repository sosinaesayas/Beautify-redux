import React, { useState } from 'react'
import "./shop.css"
import { AiOutlineSearch } from 'react-icons/ai'
import general1 from "../assets/general1.jpg"
import general2 from "../assets/general2.jpg"
import general3 from "../assets/general3.jpg"
import general4 from "../assets/general4.jpg"
import general5 from "../assets/general5.jpg"
import general6 from "../assets/general6.jpg"
import general7 from "../assets/general7.jpg"
import general8 from "../assets/general8.jpg"
import general9 from "../assets/general9.jpg"
import general10 from "../assets/general10.jpg"
import general11 from "../assets/general11.jpg"
import general12 from "../assets/general12.jpg"
import general13 from "../assets/general13.jpg"
import general14 from "../assets/general14.jpg"
import general15 from "../assets/general15.jpg"
import general16 from "../assets/general16.jpg"
import general17 from "../assets/general18.jpg"
import general18 from "../assets/general18.jpg"
import general19 from "../assets/general19.jpg"
import general20 from "../assets/general20.jpg"



const Shop = () => {
  const [active, setActive] = useState('')
  const changeHandler = (item: any) => {
    setActive(item)
  }
  return (
    <div>
        <div className='sorting-container'>
        <div className='sorting'>
          <div className='p-container'>
            <p className='sorting-p'>Shop by:</p>
          </div>
          <div className='button-container'>
              <button onClick={()=>changeHandler('all-catagory')} className = {active === "all-catagory" ?  "active-button" : "catagory-button"}>All catagory</button>
              <button onClick={()=>changeHandler('woman')}  className = {active === "woman" ?  "active-button" : "catagory-button"}>Woman</button>
              <button onClick={()=>changeHandler('man')}  className = {active === "man" ?  "active-button" : "catagory-button"}>Man</button>
              <button onClick={()=>changeHandler('kids')}  className = {active === "kids" ?  "active-button" : "catagory-button"}>Kids</button>
              <button onClick={()=>changeHandler('jewellery')}  className = {active === "jewellery" ?  "active-button" : "catagory-button"}>Jewellery</button>
          </div>
         
        </div>
        
        <div className='search-keyword-container'>
          <input className='search-keyword' type="text" placeholder='Search Keyword ...'/>
          <AiOutlineSearch className="search-icon" /*onclick here*/  size={20}  style= {{ color:"gray", marginRight:"2rem"}}/>
        </div>
        </div>


        <div className='images-container'>
            <img className='images' src={general1} alt="cosmetics" />
            <img className='images' src={general2} alt="cosmetics" />
            <img className='images' src={general3} alt="cosmetics" />
            <img className='images'src={general4} alt="cosmetics" />
            <img className='images' src={general5} alt="cosmetics" />
            <img className='images'src={general6} alt="cosmetics" />
            <img className='images'src={general7} alt="cosmetics" />
            <img className='images'src={general8} alt="cosmetics" />
            <img className='images'src={general9} alt="cosmetics" />
            <img className='images'src={general10} alt="cosmetics" /> 
            <img className='images' src={general11} alt="cosmetics" />
            <img className='images' src={general12} alt="cosmetics" />
            <img className='images' src={general13} alt="cosmetics" />
            <img className='images'src={general14} alt="cosmetics" />
            <img className='images'src={general15} alt="cosmetics" />
            <img className='images'src={general16} alt="cosmetics" />         
            <img className='images'src={general17} alt="cosmetics" />
            <img className='images'src={general18} alt="cosmetics" />
            <img className='images'src={general19} alt="cosmetics" />
            <img className='images' src={general20} alt="cosmetics" />
        </div>
        

    </div>
  )
}

export default Shop
