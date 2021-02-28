import React, { useEffect, useState } from 'react';
import styles from "./Header.module.scss";
import logo from '../assets/img/logo.png';
import Navbar from './NavBar';

const header = {
    left: [{ id: 1, component: 'Logo', className: 'navbar-logo', imgSrc: logo },],
    right: [
        { id: 2, label: "Home", component: 'Menu', className: 'navbar-menu' },
        { id: 3, label: "About Us", component: 'Menu', className: 'navbar-menu' },
        { id: 4, label: "Services", component: 'Menu', className: 'navbar-menu' },
        { id: 5, label: "Login", component: 'Menu', className: 'navbar-menu log-in' }
    ],
}
function Header() {
    const [isScrolling, setIsScroll] = useState(false)

    function handleScroll() {
        if (window.pageYOffset > 0) {
            setIsScroll(true)
        }
        else if (window.pageYOffset == 0) {
            setIsScroll(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <div className={`${styles.Header} ${isScrolling && (styles.scroll)}`}>
            <Navbar {...header} />
        </div>
    )
}

export default Header;
