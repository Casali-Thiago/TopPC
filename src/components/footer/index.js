import React from 'react'
import Styles from './footer.module.css'
import FacebookLogo from '../../assets/facebook.png'
import InstagramLogo from '../../assets/instagram.png'
import WhasappLogo from '../../assets/whatsapp.png'

const index = () => {
  return (
    <footer className={Styles.footerCont}>
      <div className={Styles.footerTop}>
        <div className={Styles.buttonCont}>
          <img className={Styles.facebookImg} src={FacebookLogo} />
          <button>Facebook</button>
        </div>
        <div className={Styles.buttonCont}>
          <img className={Styles.instagramImg} srch={InstagramLogo}/>
          <button>instagram</button>
        </div>
        <div className={Styles.buttonCont}>
          <img className={Styles.whatsImg} src={WhasappLogo}/>
          <button>WhasAPP</button>
        </div>
      </div>
      <div className={Styles.footerBottom}>
        <span className={Styles.textDireitos}>@2022 Direitos reservados Top PC </span>
      </div>

    </footer>
  )
}

export default index