import React , {Component} from 'react';
import classes from './Project.module.css'

class Project extends Component {
        state = {
            showDetails:false
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
let showDetailsClasses = [classes.Project]
        if(this.state.showDetails){
            showDetailsClasses = [classes.Project,classes.Details]
        }
    return (
        <div className = {showDetailsClasses.join(' ')}
            onMouseEnter = {this.mouserEnterHandler}
            onMouseLeave = {this.mouseLeaveHandler}
            >
            <p>Project</p>
            <p>{this.props.onMouseOver}</p>
        </div>
    )
    }
}

export default Project