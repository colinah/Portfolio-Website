import React from 'react';
import classes from './ShowProjectDetails.module.css'
import Button from '../UI/Button/Button';

const showProjectDetails = (props) => {
    return (
        <div className={classes.DetailsContainer}>
            <div>
                <h3>{props.title}</h3>
            </div>
            <div>
            <p>{props.discription}</p>
            </div>
            <div className={classes.Links}>
                <Button link={props.link} >Site</Button>
                <Button link = {props.gitLink}>Github</Button>
                <p>Opens in new tab</p>
            </div>

        </div>
    )
}

export default showProjectDetails;