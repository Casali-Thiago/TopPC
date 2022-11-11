import React from 'react'
import Styles from './footer.module.css'

const index = () => {
  return (
    <footer className={Styles.footerCont}>
        <div className={Styles.footerTop}>      
        </div>
        <div className={Styles.footerBottom}>
          <span className={Styles.textDireitos}>@2022 Direitos reservados Top PC </span>
        </div>

    </footer>
  )
}

export default index