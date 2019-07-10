import React, { Component } from "react";

import styles from './styles.css';
import { ActionButton } from '../Button';

const Header = () => {
    return (
        <div style={styles.header}>
            <h1 className="heading">Heading</h1>
            <ActionButton content={'Login'} />
        </div>
    )
}


export default Header;