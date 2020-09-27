import React, { Component, Fragment } from 'react';
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
        let Plus = classes.Plus;
        if(this.state.showDetails){
            CSS = [classes.Modal, classes.Show];
            Plus = classes.NoPlus
        }

        let description = <div className={classes.ModalContent}>{this.props.description}</div>
        if( this.props.descriptionTwo ) {
            description = 
            (
                <Fragment>
                    <div className={classes.ModalContent}>{this.props.description}</div>
                    <div className={classes.ModalContent}>{this.props.descriptionTwo}</div>
                    <div className={classes.ModalContent}>{this.props.descriptionThree}</div>
                </Fragment>
            )
        }

        return(
            <div className={classes.Image}
                onMouseEnter = {this.mouserEnterHandler}
                onMouseLeave = {this.mouseLeaveHandler}
                >
                <div className={Plus}>+</div>
                <img src={this.props.image} alt={this.props.alt}/>
                <div className={CSS.join(' ')}>
                    <h4 className={classes.ModalHeader}>{this.props.title}</h4>
                    {description}
                    <div className={classes.ModalSkills}>{this.props.skills}</div>
                </div>
            </div>
        )
    }
}

export default Modal;