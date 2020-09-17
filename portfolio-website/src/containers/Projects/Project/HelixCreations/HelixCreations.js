import React , {Component} from 'react';
import classes from './HelixCreations.module.css'
import ShowProjectDetails from '../../../../components/ShowProjectDetails/ShowProjectDetails';


class HelixCreations extends Component {
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
                                        title="Helix Creations" 
                                        discription='"Helix Creations is a custom designed wordpress blog for adventure park and home construction projects."' 
                                        link = "https://www.helixcreations.com"
                                        gitLink = "https://github.com/colinah/Helix-creations"
                                         />
        }
    return (
        <div className={classes.HelixCreations}
            onMouseEnter = {this.mouserEnterHandler}
            onMouseLeave = {this.mouseLeaveHandler}
            >
            {showDetailsComponent}
        </div>
    )
    }
}

export default HelixCreations