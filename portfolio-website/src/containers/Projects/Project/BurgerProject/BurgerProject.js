import React , {Component} from 'react';
import classes from './BurgerProject.module.css'
import ShowProjectDetails from '../../../../components/ShowProjectDetails/ShowProjectDetails';


class BurgerProject extends Component {
        state = {
            showDetails:true
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
            showDetailsComponent = <ShowProjectDetails />
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

export default BurgerProject