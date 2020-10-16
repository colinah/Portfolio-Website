import classes from './Header.module.scss';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FractalTree  from '../FractalTree/FractalTree';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { width: 0,
                        height: 0,
                        scl: 0.67,
                        angle: 3.14159/6,
                        shouldUpdate: false};
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.sliderChangeHandler = this.sliderChangeHandler.bind(this);
      }
      
      componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
      }
      
      componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
      }
      
      updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight});
      }
      sliderChangeHandler(event) {
        // let value = event.target.value;
        this.setState({scl: event.target.value});
      }

    render() {
        let sketch = (<FractalTree 
            startLocation = {[{x:this.state.width/2,y:this.state.height},{x:this.state.width/2,y:this.state.height-(this.state.height/3)}]}
            width = {this.state.width}
            height = {this.state.height * 0.6}
            scl = {this.state.scl}
            angle = {this.state.angle}
            />)
        return(
            <div className={classes.Header}>
                <div className={classes.FractalTree}>
                    {sketch}
                </div>
                <nav className={classes.Nav}>
                    <div className={classes.Links}>
                        <Link to="/">Home Page</Link>
                        <Link to="/blog/archive">Archive</Link>
                    </div>
                    <span className={classes.Border}></span>
                </nav>
            </div>
        )
    }
}

export default Header