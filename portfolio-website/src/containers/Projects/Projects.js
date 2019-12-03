import React, {Component} from 'react';
import BurgerProject from './Project/BurgerProject/BurgerProject';
import HackerRank from './Project/HackerRank/HackerRank';
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
                <div >
                    <BurgerProject key="10"/>
                    <HackerRank />
                </div>
            </div>
            
        )
    }
}

export default Projects;