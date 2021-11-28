import React from "react";
import classes from './Header.module.css'

const Header = () => {
    return (
        <header className={classes.header}>
            <img
                 src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/LINE_logo.svg/768px-LINE_logo.svg.png'/>
        </header>
    )
}

export default Header