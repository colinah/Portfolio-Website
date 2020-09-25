import React, { Component } from 'react';
import classes from './Modal.module.scss'

class Modal extends Component {
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
    render(){

        let CSS = [classes.Modal, classes.Hide];
        if(this.state.showDetails){
            CSS = [classes.Modal, classes.Show];
        }

        return(
            <div className={classes.Image}
                onMouseEnter = {this.mouserEnterHandler}
                onMouseLeave = {this.mouseLeaveHandler}
                >
                <img src={this.props.image} alt={this.props.alt}/>
                <div className={CSS.join(' ')}>
                    <h4 className={classes.ModalHeader}>{this.props.title}</h4>
                    <div className={classes.ModalContent}>{this.props.description}</div>
                    <div className={classes.ModalSkills}>{this.props.skills}</div>
                </div>
            </div>
        )
    }
}

export default Modal;