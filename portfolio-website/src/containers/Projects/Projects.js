import React, {Component} from 'react';
import BurgerProject from './Project/BurgerProject/BurgerProject';
import classes from './Projects.module.css';

class Projects extends Component {
    state = {
        showDetails: false
    }

    render (){
        return (

            <div className={classes.ProjectsContainer}>
                <div className={classes.TitleContainer}>
                    <h2 className={classes.Title}>Projects</h2>
                </div>
                <div>
                    <BurgerProject />
                </div>
            </div>
            
        )
    }
}

export default Projects;