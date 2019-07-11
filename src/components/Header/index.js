import React, { Component } from "react";
import { Link } from 'react-router-dom';

import styles from './styles.css';
import { ActionButton } from '../Button';

const Header = () => {
    return (
        <div style={styles.header}>
            <Link to="/" style={styles.link}>
                <h1 className="heading">Heading</h1>
            </Link>
            <ActionButton content={'Login'} />
        </div>
    )
}


export default Header;