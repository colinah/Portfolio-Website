import React , {Component} from 'react';
import classes from './BurgerProject.module.css'
import ShowProjectDetails from '../../../../components/ShowProjectDetails/ShowProjectDetails';


class BurgerProject extends Component {
        state = {
            showDetails: false
        }

    mouserEnterHandler = () => {
        this.setState({
            showDetails: true
        });
    }

    mouseLeaveHandler = () => {
        this.setState({showDetails:false})
    }



    render() {
let showDetailsComponent = null
        if(this.state.showDetails){
            showDetailsComponent = <ShowProjectDetails 
                                        title="Burger Builder" 
                                        discription="Udemy React.js course project from Maximilian Schwarzmüllar. Builds CSS burger based on customer imput, has authentication useing firebase and firebase as database for orders.  " 
                                        link = "https://burger-1e0b5.firebaseapp.com"
                                        gitLink = "https://github.com/colinah/Burger2.0" />
        }
    return (
        <div className={classes.BurgerProject}
            onMouseEnter = {this.mouserEnterHandler}
            onMouseLeave = {this.mouseLeaveHandler}
            >
            {showDetailsComponent}
        </div>
    )
    }
}

export default BurgerProject