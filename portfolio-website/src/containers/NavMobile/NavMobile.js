import React, { Component, useRef } from 'react';
import classes from './NavMobile.module.scss';

class Header extends Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef()
    }

    state = {
        displayNav: false
    }
    toggleClass = () => {
        this.setState((state) => {
            return {displayNav: !state.displayNav};
          });
    }

    scrollToMyRef = () => {
        window.scrollTo(0, 1000)  
        this.toggleClass(); 
    }
    // scrollToMyRef = () => window.scrollTo(0, this.myRef.current.offsetTop)   
    // run this method to execute scrolling. 

    render(){
        let navDisplay = classes.hideNav
        if(this.state.displayNav){
            navDisplay = classes.showNav
        }
    return (
        <div class={classes.Nav}>
            <div onClick={this.toggleClass} class={classes.NavMobileToggleWrapper}>
                <div class={classes.NavMobileToggle}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div class={navDisplay}>
                    <div class={classes.NavMobileMenu}>
                        <div onClick={this.scrollToMyRef}>About Me</div>
                        <div>Projects</div>
                        <div>Contact</div>
                    </div>
            </div>
        </div>

        )
    }
}

export default Header