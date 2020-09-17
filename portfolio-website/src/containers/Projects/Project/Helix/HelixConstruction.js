import React , {Component} from 'react';
import classes from './HelixConstruction.module.css'
import ShowProjectDetails from '../../../../components/ShowProjectDetails/ShowProjectDetails';


class HelixConstruction extends Component {
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
                                        title="Helix Construction" 
                                        discription='"Ascend Performance and Rehab specializing in optimizing climbing rehab and performance."' 
                                        link = "https://www.HelixConstructionCo.com/"
                                        gitLink = "https://github.com/colinah/HelixConstruction" />
        }
    return (
        <div className={classes.HelixConstruction}
            onMouseEnter = {this.mouserEnterHandler}
            onMouseLeave = {this.mouseLeaveHandler}
            >
            {showDetailsComponent}
        </div>
    )
    }
}

export default HelixConstruction