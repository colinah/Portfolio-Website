import React, { Component } from 'react';
import classes from './Header.module.scss';
import FractalTree from '../../components/FractalTree/FractalTree';

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


    render(){
        let sketch = (<FractalTree 
            startLocation = {[{x:this.state.width/2,y:this.state.height},{x:this.state.width/2,y:this.state.height-(this.state.height/3)}]}
            width = {this.state.width}
            height = {this.state.height}
            scl = {this.state.scl}
            angle = {this.state.angle}
            />)
    return (
        <div className={classes.ImageContainer}>
            <div className={classes.TreeContainer }> 
                {sketch}
            </div>
            <div className={classes.TitleContainer}>
                <h2 className = {classes.Intro}>Hello, I'm</h2>
                <h1 className = {classes.Name} >Colin Hale</h1>
                <p className={classes.Position}>Front-end Web Developer</p>
            </div>
          {/* <div className={classes.SliderContainer}>
            <input 
              className = {classes.Slider}
              type="range" 
              min="0.4" max="1" 
              value={this.state.scl} 
              onChange={this.sliderChangeHandler}
              step="0.01"/>
          </div> */}
        </div>
    )
    }
}

export default Header

