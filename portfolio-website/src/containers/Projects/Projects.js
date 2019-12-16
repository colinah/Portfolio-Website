import React, {Component} from 'react';
import BurgerProject from './Project/BurgerProject/BurgerProject';
import HackerRank from './Project/HackerRank/HackerRank';
import Timer from './Project/Timer/Timer';
import CSS from './Project/CSS/CSS';
import classes from './Projects.module.scss';
import Modal from '../../components/UI/Modal/Modal';


class Projects extends Component {
    state = {
        showDetails: false,
        showModal: false,
    }

    modalClosedHandler = () => {
        this.setState({showModal:false})
    }
    modalOpenHandler = (display) => {
        this.setState({showModal:true})
    }



    render (){
        return (

            <div className={classes.ProjectsContainer}>
                <Modal show={this.state.showModal} modalClosed={this.modalClosedHandler}>
                    <p>Hi</p>
                </Modal>
                <div className={classes.TitleContainer}>
                    <h2 className={classes.Title}>Projects</h2>
                </div>
                <div >
                    <BurgerProject />
                    <CSS />
                    <HackerRank />
                    <Timer />
                </div>
            </div>
            
        )
    }
}

export default Projects;