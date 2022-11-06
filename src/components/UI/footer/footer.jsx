import React from 'react';
import classes from './footer.module.css'
import snake from './snake.png'

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <div className={classes.item} >
                <a href='/home' style={{paddingRight: '3px'}}>
                    <img
                        height='20px'
                    src={snake}
                    />
                </a>
                © 2022 Aleksandr M.
            </div>
            <div className={classes.item}>
                <a href='/about' style={{textDecoration: 'none'}}>About</a>
            </div>
            <div className={classes.item}>
                <a href='https://github.com/kaiiisaka' style={{textDecoration: 'none'}}>Github</a>
            </div>
        </footer>
    );
};

export default Footer;