import React, { Component } from "react";
import { Link } from 'react-router-dom';

import styles from './styles.css';

export const ActionButton = ({ content, action, type }) => {
    const buttonStyle = { ...styles.button, ...styles[type] };
    return (
        <div style={styles.buttonContainer}>
            <button onClick={action || null} style={buttonStyle}>{content || null}</button>
        </div>
    )
}

export const LinkButton = ({ content, action, type, target }) => {
    const buttonStyle = { ...styles.button, ...styles[type] };
    return (
        <div style={styles.buttonContainer}>
            <Link to={target || null} onClick={action || null} style={buttonStyle}>{content || null}</Link>
        </div>
    )
}
