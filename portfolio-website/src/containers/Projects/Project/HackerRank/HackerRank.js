import React , {Component} from 'react';
import classes from './HackerRank.module.css'
import ShowProjectDetails from '../../../../components/ShowProjectDetails/ShowProjectDetails';


class HackerRank extends Component {
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
                                        title="HackerRank" 
                                        discription='"HackerRank is a place where programmers from all over the world come together to solve problems in a wide range of Computer Science domains such as algorithms, machine learning, or artificial intelligence, as well as to practice different programming paradigms like functional programming."' 
                                        link = "https://www.hackerrank.com/Halecolin1"
                                        gitLink = "https://github.com/colinah/HackerRank" />
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

export default HackerRank