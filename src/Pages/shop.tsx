import React, { useState } from 'react'
import styles from "./shop.module.css"
import { AiOutlineSearch } from 'react-icons/ai'
import { FaHeart } from 'react-icons/fa'
import { FaEye } from 'react-icons/fa'
import general1 from "../assets/general1.jpg"
import general3 from "../assets/general3.jpg"
import general4 from "../assets/general4.jpg"
import general5 from "../assets/general5.jpg"
import general9 from "../assets/general9.jpg"
import general10 from "../assets/general10.jpg"
import { Link } from 'react-router-dom'



const Shop = () => {
  const [active, setActive] = useState('')
  const changeHandler = (item: any) => {
    setActive(item)
  }
  return (
    <div>
        <div className={styles.sortingContainer}>
        <div className={styles.sorting}>
          <div className={styles.pContainer}>
            <p className={styles.sortingP}>Shop by:</p>
          </div>
          <div className={styles.buttonContainer}>
              <button onClick={()=>changeHandler('all-catagory')} className = {active === "all-catagory" ?  "activeButton" : "catagoryButton"}>All catagory</button>
              <button onClick={()=>changeHandler('woman')}  className = {active === "woman" ?  "activeButton" : "catagoryButton"}>Woman</button>
              <button onClick={()=>changeHandler('man')}  className = {active === "man" ?  "activeButton" : "catagoryButton"}>Man</button>
              <button onClick={()=>changeHandler('kids')}  className = {active === "kids" ?  "activeButton" : "catagoryButton"}>Kids</button>
              <button onClick={()=>changeHandler('jewellery')}  className = {active === "jewellery" ?  "activeButton" : "catagoryButton"}>Jewellery</button>
          </div>
         
        </div>
        
        <div className={styles.searchKeywordContainer}>
          <input className={styles.searchKeyword} type="text" placeholder='Search Keyword ...'/>
          <AiOutlineSearch className={styles.searchIcon} /*onclick here*/  size={20}  style= {{ color:"gray", marginRight:"2rem"}}/>
        </div>
        </div>


        <div className={styles.imagesContainer}>
        <div className={styles.imageContainer}>
           {/* <Link className='imageLink' to="/products"></Link> */}
           <img className={styles.images} src={general1} alt="cosmetics" />
            <div className={styles.hoverButton1}>
              <button className={styles.iconButton}><FaHeart id='heart-style' /></button>
              <button className={styles.iconButton}><FaEye id='eye-style'/></button>
            </div>
            <div className={styles.hoverButton}>
                <button className={styles.cartButton}>Add to cart</button>
            </div>
          </div>

          <div className={styles.imageContainer}>
          <img className={styles.images} src={general3} alt="cosmetics" />
          <div className={styles.hoverButton1}>
            <button className={styles.iconButton}><FaHeart id='heart-style' /></button>
            <button className={styles.iconButton}><FaEye id='eye-style'/></button>
            </div>
            <div className={styles.hoverButton}>
                <button className={styles.cartButton}>Add to cart</button>
            </div>
          </div>

          <div className={styles.imageContainer}>
            <img className={styles.images} src={general1} alt="cosmetics" />
            <div className={styles.hoverButton1}>
              <button className={styles.iconButton}><FaHeart id='heart-style' /></button>
              <button className={styles.iconButton}><FaEye id='eye-style'/></button>
            </div>
            <div className={styles.hoverButton}>
                <button className={styles.cartButton}>Add to cart</button>
            </div>
          </div>

          <div className={styles.imageContainer}>
            <img className={styles.images} src={general4} alt="cosmetics" />
            <div className={styles.hoverButton1}>
              <button className={styles.iconButton}><FaHeart id='heart-style' /></button>
              <button className={styles.iconButton}><FaEye id='eye-style'/></button>
            </div>
            <div className={styles.hoverButton}>
                <button className={styles.cartButton}>Add to cart</button>
            </div>
          </div>

          <div className={styles.imageContainer}>
            <img className={styles.images} src={general5} alt="cosmetics" />
            <div className={styles.hoverButton1}>
              <button className={styles.iconButton}><FaHeart id='heart-style' /></button>
              <button className={styles.iconButton}><FaEye id='eye-style'/></button>
            </div>
            <div className={styles.hoverButton}>
                <button className={styles.cartButton}>Add to cart</button>
            </div>
          </div>

          <div className={styles.imageContainer}>
            <img className={styles.images} src={general4} alt="cosmetics" />
            <div className={styles.hoverButton1}>
              <button className={styles.iconButton}><FaHeart id='heart-style' /></button>
              <button className={styles.iconButton}><FaEye id='eye-style'/></button>
            </div>
            <div className={styles.hoverButton}>
                <button className={styles.cartButton}>Add to cart</button>
            </div>
          </div>
            
          <div className={styles.imageContainer}>
            <img className={styles.images} src={general3} alt="cosmetics" />
            <div className={styles.hoverButton1}>
              <button className={styles.iconButton}><FaHeart id='heart-style' /></button>
              <button className={styles.iconButton}><FaEye id='eye-style'/></button>
            </div>
            <div className={styles.hoverButton}>
                <button className={styles.cartButton}>Add to cart</button>
            </div>
          </div>
          
          <div className={styles.imageContainer}>
            <img className={styles.images} src={general3} alt="cosmetics" />
            <div className={styles.hoverButton1}>
              <button className={styles.iconButton}><FaHeart id='heart-style' /></button>
              <button className={styles.iconButton}><FaEye id='eye-style'/></button>
            </div>
            <div className={styles.hoverButton}>
                <button className={styles.cartButton}>Add to cart</button>
            </div>
          </div>
           
          <div className={styles.imageContainer}>
            <img className={styles.images} src={general9} alt="cosmetics" />
            <div className={styles.hoverButton1}>
              <button className={styles.iconButton}><FaHeart id='heart-style' /></button>
              <button className={styles.iconButton}><FaEye id='eye-style'/></button>
            </div>
            <div className={styles.hoverButton}>
                <button className={styles.cartButton}>Add to cart</button>
            </div>
          </div>

          <div className={styles.imageContainer}>
            <img className={styles.images} src={general10} alt="cosmetics" />
            <div className={styles.hoverButton1}>
              <button className={styles.iconButton}><FaHeart id='heart-style' /></button>
              <button className={styles.iconButton}><FaEye id='eye-style'/></button>
            </div>
            <div className={styles.hoverButton}>
                <button className={styles.cartButton}>Add to cart</button>
            </div>
          </div>

          <div className={styles.imageContainer}>
            <img className={styles.images} src={general9} alt="cosmetics" />
            <div className={styles.hoverButton1}>
              <button className={styles.iconButton}><FaHeart id='heart-style' /></button>
              <button className={styles.iconButton}><FaEye id='eye-style'/></button>
            </div>
            <div className={styles.hoverButton}>
                <button className={styles.cartButton}>Add to cart</button>
            </div>
          </div>
          <div className={styles.imageContainer}>
            <img className={styles.images} src={general10} alt="cosmetics" />
            <div className={styles.hoverButton1}>
              <button className={styles.iconButton}><FaHeart id='heart-style' /></button>
              <button className={styles.iconButton}><FaEye id='eye-style'/></button>
            </div>
            <div className={styles.hoverButton}>
                <button className={styles.cartButton}>Add to cart</button>
            </div>
          </div>
        
        </div>
        

    </div>
  )
}

export default Shop
