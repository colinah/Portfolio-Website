import React , {Component} from 'react';
import classes from './AscendPnr.module.css'
import ShowProjectDetails from '../../../../components/ShowProjectDetails/ShowProjectDetails';


class AscendPnr extends Component {
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
                                        title="AscendPnr" 
                                        discription='"Ascend Performance and Rehab specializing in optimizing climbing rehab and performance."' 
                                        link = "https://ascendpnr.com/"
                                        gitLink = "https://github.com/colinah/ascendPnr" />
        }
    return (
        <div className={classes.AscendPnr}
            onMouseEnter = {this.mouserEnterHandler}
            onMouseLeave = {this.mouseLeaveHandler}
            >
            {showDetailsComponent}
        </div>
    )
    }
}

export default AscendPnr