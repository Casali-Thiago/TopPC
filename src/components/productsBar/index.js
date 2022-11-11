import React from 'react'
import Styles from './productsBar.module.css'
import Mouseex from '../../assets/mouse.jpg'




function index() {
  return (
    <div className={Styles.ProductsSlide}>
      <div className={Styles.bestSales}>
        <ul className={Styles.productsItem}>
          <li className={Styles.itemSelect}>
            <img className={Styles.MouseSale} src={Mouseex} />
            <span>MOUSE GAMER REDRAGON COBRA CHROMA RGB</span>
            <span></span>
          </li>
          <li className={Styles.itemSelect}>
            <img className={Styles.MouseSale} src={Mouseex} />
            <span>MOUSE GAMER REDRAGON COBRA CHROMA RGB</span>
          </li>
          <li className={Styles.itemSelect}>
            <img className={Styles.MouseSale} src={Mouseex} />
            <span>MOUSE GAMER REDRAGON COBRA CHROMA RGB</span>
          </li>
          <li className={Styles.itemSelect}>
            <img className={Styles.MouseSale} src={Mouseex} />
            <span>MOUSE GAMER REDRAGON COBRA CHROMA RGB</span>
          </li>
          <li className={Styles.itemSelect}>
            <img className={Styles.MouseSale} src={Mouseex} />
            <span>MOUSE GAMER REDRAGON COBRA CHROMA RGB</span>
          </li>
        </ul>
        <div className={Styles.promoProducts}>
          <ul className={Styles.productsItem}>
            <li className={Styles.itemSelect}>
              <img className={Styles.MouseSale} src={Mouseex} />
              <span>MOUSE GAMER REDRAGON COBRA CHROMA RGB</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default index