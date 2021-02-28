import React from 'react';

import styles from "./index.module.scss"
import Menus from './Menus';

function Navbar({ left, right }) {
    const changeCase = ""
    return (
        <div className={styles.HeaderWrapper}>
            <div className={styles.container}>
                <div>
                    <Menus items={left} />
                </div>
                <div className={styles['menu-wrapper']}>
                    <Menus items={right} />
                </div>
            </div>
        </div >
    )



}

export default Navbar;
