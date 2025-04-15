import React from "react";
import styles from "./Logo.module.css";
import Img from "../../assets/Logo.png"
import { Link } from "react-router-dom";
export default function Logo() {
    return <Link to='/'>
    <div className={styles.logo}>
        <img className={styles.logoImg} src={Img} alt="Logo" />
    </div>
    </Link>
    
}