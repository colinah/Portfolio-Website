import React, {Component} from 'react';
import HelixCreations from './Project/HelixCreations/HelixCreations';
import HelixConstruction from './Project/Helix/HelixConstruction';
import AscendPnr from './Project/AscendPnr/AscendPnr';
import BurgerProject from './Project/BurgerProject/BurgerProject';
import HackerRank from './Project/HackerRank/HackerRank';
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
                    <p>Hello</p>
                </Modal>
                <div className={classes.TitleContainer}>
                    <h2 className={classes.Title}>Projects</h2>
                </div>
                <div className={classes.ProjectsContent}>
                    
                    <HelixCreations />
                    <AscendPnr />
                    <HelixConstruction />
                    <BurgerProject />
                    <CSS />
                    <HackerRank />
                </div>
            </div>
            
        )
    }
}

export default Projects;