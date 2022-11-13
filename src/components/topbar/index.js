import { useEffect, useState } from 'react'
import Styles from './topbar.module.css'
import Search from '../../assets/icons-search.png'
import CartIcon from '../../assets/cart-icon.png'
import MainLogo from '../../assets/logoMain.png'
import LoginPage from '../../pages/login/index.js'

function Index() {
    const [topBarActive, setTopBarActive] = useState(false)
    return (
        <div className={`${Styles.container} ${topBarActive === true ? Styles.active : null}`}>
            <div className={Styles.containerInside}>
                <div className={Styles.topBar}>
                    <button className={Styles.hamburguerMenuCont} onClick={() => setTopBarActive(!topBarActive)}>
                        <div className={`${Styles.hamburguerLine} ${Styles.line1}`} />
                        <div className={`${Styles.hamburguerLine} ${Styles.line2}`} />
                    </button>

                    <div className={Styles.logoMain}>
                        <img className={Styles.Logoimage} src={MainLogo}/>
                    </div>
                </div>
                <div className={Styles.buttonsProducts}>
                    <button className={Styles.logoButton}>
                        <div className={Styles.logoMenuCont}> 
                        <img className={Styles.LogoMenu} src={MainLogo}/>
                        </div>
                    </button>
                    <button className={Styles.ButtonsCont}>Hardware</button>
                    <button className={Styles.ButtonsCont}>Perifericos</button>
                    <button className={Styles.ButtonsCont}>Computadores</button>
                    <button className={Styles.ButtonsCont}>Monitores</button>
                    <button className={Styles.ButtonsCont}>Cadeiras Gamers</button>
                    <button className={Styles.ButtonsCont}>Notebooks</button>
                    <button className={Styles.ButtonsCont}>Monitores</button>
                    <button className={Styles.ButtonsCont}>Monitores</button>
                    <button className={Styles.ButtonsCont}>Monitores</button>
                </div>
                <div className={Styles.searchCont}>
                    <div className={Styles.searchBar}>
                        <img className={Styles.searchLogo} src={Search} />
                        <input className={Styles.searchInput} type='text' placeholder='Buscar...' />
                    </div>
                </div>
                <div className={Styles.AccountCont}>
                    <a href={LoginPage} className={Styles.nameAccount}>Login</a>
                </div>
                <div>
                    <div className={Styles.cartBar}>
                        <img className={Styles.cartIcon} src={CartIcon} />
                        <span className={Styles.CartText}>Your Cart </span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Index
