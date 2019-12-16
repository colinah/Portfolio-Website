import React from 'react';
import classes from './Header.module.scss';
const header = () => {
    return (
        <div className={classes.ImageContainer}>
            <div className={classes.TitleContainer}>
                <h1 className = {classes.Name} >Colin Hale</h1>
                <p className={classes.Position}>React.js Developer</p>
            </div>
        </div>
    )
}

export default header

