import React from 'react';
import classes from './Resume.module.scss'

const resume = () => {
    return (
        <div>
        <div className={classes.TitleContainer}>
            <h2 className={classes.Title}>Resume</h2>
            <span>download</span>
        </div>
        <div className={classes.Programing}>
            <div>Programming Languages:</div> 
        </div>
        <div className={classes.Education}>
            <div>Masters</div>
            <div>Bachlors</div>
            <div>Associates</div>
            <div>Udemy Courses</div>
        </div>
        <div className={classes.Experience}>
            <div>Professor</div>
            <div>Research</div>
        </div>
        
        </div>
        
    )
}

export default resume