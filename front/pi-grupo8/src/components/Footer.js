import React from "react";
import facebook from '../assets/facebook.svg';
import linkedin from '../assets/linkedin.svg';
import twitter from '../assets/twitter.svg';
import instagram from '../assets/instagram.svg';
import copyright from '../assets/copyright-regular.svg';
import styles from '../Styles/footer.module.scss';



export default function Footer() {
    return(
        
        <footer className={styles.footer}>
            <div className={styles.containerTextCopy}>
                <p className={styles.copyText}><img className={styles.logoCopy} src={copyright} alt="copyright logo"/>2022 Digital Booking</p>
            </div>
            <div className={styles.footerLogoContainer}>
                <img className={styles.logo} src={facebook} alt="facebook logo"/>
                <img className={styles.logo} src={linkedin} alt="linkedin logo"/>
                <img className={styles.logo} src={twitter} alt="twitter logo"/>
                <img className={styles.logo} src={instagram} alt="instagram logo"/>
            </div>
        </footer>
        
        
    )
    
}