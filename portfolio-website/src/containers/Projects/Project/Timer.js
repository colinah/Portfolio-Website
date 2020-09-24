import React , {Component} from 'react';
import classes from './Timer.module.css'
import ShowProjectDetails from '../../../../components/ShowProjectDetails/ShowProjectDetails';


class Project extends Component {
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
                                        title="Timer" 
                                        discription='Two hour challenge to see how much I can code to make a timer.'
                                        gitLink = "https://github.com/colinah/Timer" 
                                        link = "https://timer-408d6.firebaseapp.com/" />
        }
    return (
        <div className={classes.Project}
            onMouseEnter = {this.mouserEnterHandler}
            onMouseLeave = {this.mouseLeaveHandler}
            >
            {showDetailsComponent}
        </div>
    )
    }
}

export default Project