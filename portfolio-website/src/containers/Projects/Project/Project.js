import React , {Component} from 'react';
import classes from './Project.module.css'
import ShowProjectDetails from '../../../components/ShowProjectDetails/ShowProjectDetails';


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
            const { title , discription , gitLink , link } = this.props;
            showDetailsComponent = <ShowProjectDetails 
                                        title={title} 
                                        discription={discription}
                                        gitLink = {gitLink} 
                                        link = {link} 
                                        />
        }
    return (
        <div style={{backgroundColor: `${this.props.backgroundcolor}`}} className={classes.Project}
            onMouseEnter = {this.mouserEnterHandler}
            onMouseLeave = {this.mouseLeaveHandler}
            >
            <img className={classes.ProjectImage} src={this.props.backgroundurl}  alt={this.props.title}/>
            {showDetailsComponent}
        </div>
    )
    }
}

export default Project