import React, {Component} from 'react';
import BurgerProject from './Project/BurgerProject/BurgerProject';
import HackerRank from './Project/HackerRank/HackerRank';
import Timer from './Project/Timer/Timer';
import classes from './Projects.module.css';
import Modal from '../../components/UI/Modal/Modal';

class Projects extends Component {
    state = {
        showDetails: false,
        showModal: true
    }

    modalClosedHandler = () => {
        this.setState({showModal:false})
    }



    render (){
        return (

            <div className={classes.ProjectsContainer}>
                <Modal show={this.state.showModal} modalClosed={this.modalClosedHandler}>
                    <p>hi</p>
                </Modal>
                <div className={classes.TitleContainer}>
                    <h2 className={classes.Title}>Projects</h2>
                </div>
                <div >
                    <BurgerProject key="10"/>
                    <HackerRank />
                    <Timer />
                </div>
            </div>
            
        )
    }
}

export default Projects;