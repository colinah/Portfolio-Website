import React, { Component } from 'react';
import classes from './NavMobile.module.scss';

class NavMobile extends Component {
    state = {
        displayNav: false
    }
    toggleClass = () => {
        this.setState((state) => {
            return {displayNav: !state.displayNav};
          });
    }

    scrollToAboutMe = () => {
        this.props.scrollAboutMe() 
        this.toggleClass(); 
    }
    scrollToProjects= () => {
        this.props.scrollProjects() 
        this.toggleClass(); 
    }
    scrollToContact = () => {
        this.props.scrollContact() 
        this.toggleClass(); 
    }

    render(){
        let navDisplay = classes.hideNav;
        let hamburgerDisplay = classes.NavMobileToggleWrapper;
        let exitMenu = classes.ExitMenuHide
        if(this.state.displayNav){
            navDisplay = classes.showNav
            hamburgerDisplay = classes.NavMobileToggleWrapperHide;
            exitMenu = classes.ExitMenu
        }
    return (
        <div class={classes.Nav}>
            <div onClick={this.toggleClass} class={hamburgerDisplay}>
                <div class={classes.NavMobileToggle}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div onClick={this.toggleClass} class={exitMenu}>
                <div>
                    X
                </div>
            </div>
            <div class={navDisplay}>
                    <div class={classes.NavMobileMenu}>
                        <div onClick={this.scrollToAboutMe}>About Me</div>
                        <div onClick={this.scrollToProjects}>Projects</div>
                        <div onClick={this.scrollToContact}>Contact</div>
                    </div>
            </div>
        </div>

        )
    }
}

export default NavMobile