import React from 'react'
import Styles from './footer.module.css'
import FacebookLogo from '../../assets/facebook.png'
import InstagramLogo from '../../assets/instagram.png'
import WhasappLogo from '../../assets/whatsapp.png'

const index = () => {
  return (
    <footer className={Styles.footerCont}>
      <div className={Styles.footerTop}>
        <div className={Styles.infoText}>
          <span className={Styles.descptions}> Home</span>
          <span className={Styles.descptions}> About</span>
          <span className={Styles.descptions}> Contact</span>
          <span className={Styles.descptions}> Support </span>
        </div>
        <div className={Styles.containerButton}>
          <div className={Styles.buttonCont}>
            <img className={Styles.facebookImg} src={FacebookLogo} />
          </div>
          <div className={Styles.buttonCont}>
            <img className={Styles.instaImg} src={InstagramLogo} />
          </div>
          <div className={Styles.buttonCont}>
            <img className={Styles.whatsImg} src={WhasappLogo} />
          </div>
        </div>
        <div>
        </div>

      </div>
      <div className={Styles.footerBottom}>
        <span className={Styles.textDireitos}>@2022 Direitos reservados Top PC </span>
      </div>

    </footer>
  )
}

export default index