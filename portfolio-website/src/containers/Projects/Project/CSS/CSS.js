import React , {Component} from 'react';
import classes from './CSS.module.css'
import ShowProjectDetails from '../../../../components/ShowProjectDetails/ShowProjectDetails';


class CSS extends Component {
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
                                        title="UHost" 
                                        discription="Udemy CSS-The Complete Guide 2020 course project by Maximilian Schwarzmüller and Manuel Lorenz. This course covers everything from basic CSS selectors and combinators to flexbox, css grid and sass." 
                                        link = "https://css-course-d3dee.firebaseapp.com/index.html"
                                        gitLink = "https://github.com/colinah/CSS-Course" />
        }
    return (
        <div className={classes.HackerRank}
            onMouseEnter = {this.mouserEnterHandler}
            onMouseLeave = {this.mouseLeaveHandler}
            >
            {showDetailsComponent}
        </div>
    )
    }
}

export default CSS