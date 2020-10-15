import React , { Component } from 'react';
import classes from './Post.module.scss';
import { Link }  from 'react-router-dom';

class Post extends Component {
    render(){
        return(
            <div className={classes.Post}>
                <Link to={this.props.link}>
                <div className={classes.ImageWrapper}>
                    <img className={classes.Image} src={this.props.image} alt={this.props.title} />
                </div>
                <div className={classes.Content}>
                    <h3 className={classes.Title}>{this.props.title}</h3>
                    <p className={classes.Date} >{this.props.date}</p>
                    <p className={classes.Excerpt}>{this.props.excerpt}</p>
                </div>
                </Link>
            </div>
        )
    }
}

export default Post