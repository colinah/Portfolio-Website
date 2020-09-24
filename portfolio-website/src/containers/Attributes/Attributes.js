import React, { Component } from 'react';
import classes from './Attributes.module.scss';
import ClimbingImage from '../../assests/linos.jpg'


class Attributes extends Component{
    state = {

    }
    render(){
        return(
                <div className={classes.Container}>
                    <h2 className={classes.Title}>What are some of my traits?</h2>
                    <div className={classes.Content}>
                        <div className={classes.Attributes}>
                            <div className={classes.Attribute}><h5><strong>I</strong>ntroverted</h5></div>
                            <p className={classes.Explanation}>I like to spend time by myself. I enjoy learning and studying so I regularly learn new things.  I’m  productive and efficient working alone but enjoy working in teams as the proverb from John Heywood’s says “Two brains are better than one”.</p>
                        </div>
                        <div className={classes.Attributes}>
                            <div className={classes.Attribute}><h5><strong>S</strong>ensing</h5></div>
                            <p className={classes.Explanation}>This means I like to see measured results. Opinions without data are just that. I like to do Test Driven Design. Programming by doing something I think should work then testing it to make sure it works the way I think.</p>
                        </div>
                        <div className={classes.Attributes}>
                            <div className={classes.Attribute}><h5><strong>F</strong>eelings</h5></div>
                            <p className={classes.Explanation}>I spend time thinking about my emotions and others. This makes me a great time player, by observing others emotional states and seeing things from their perspective I can bring teams together to be on the same page.</p>
                        </div>        
                        <div className={classes.Attributes}>
                            <div className={classes.Attribute}><h5><strong>J</strong>udging</h5></div>
                            <p className={classes.Explanation}>I focused on the details and concretes of the world setting goals and sticking to them. I prefer to consider options before taking action and take action with meticulousness, hard work and dedication.</p>
                        </div>
                        <div className={classes.Attributes}>
                            <div className={classes.Attribute}><h5><strong>T</strong>urbulent</h5></div>
                            <p className={classes.Explanation}>I have keen eye for details and spot when things are amiss quickly. I like to help when I see a need in a down-to-earth manner. </p>
                        </div>      
    
                    </div>
                </div>

        )
    }
}

export default Attributes