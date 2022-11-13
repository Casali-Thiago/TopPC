import React from "react";
import Styles from './main.module.css'
import TopBar from '../../components/topbar/index'
import ProductsBar from '../../components/productsBar'
import MainIMG from '../../assets/banner.png'
import Footer from '../../components/footer/index'


function index() {
  return (
    <div className={Styles.mainContainer}>
      <TopBar />
      {/* <LeftBar /> */}
      <div className={Styles.ProductsSlide}>
        <img className={Styles.MainIMG} src={MainIMG} />
      </div>
      <div className={Styles.textTitleProdutos}>
        <span className={Styles.produtosVendidos}> Produtos mais Vendidos</span>
      </div>
      <ProductsBar />
      <div className={Styles.promoProducts}>
        <span className={Styles.promotext}> Produtos em Promoção</span>
      </div>
      <Footer/>

    </div>
  )
}

export default index
