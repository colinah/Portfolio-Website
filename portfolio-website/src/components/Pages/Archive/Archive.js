import React, { Component } from 'react'
import Post from '../../../containers/Blog/Post/Post';
import classes from './Archive.module.scss'

class Archive extends Component {
    render() {
        const postData = [
            {
                image: require('../../../assests/Blog/scale.png'),
                title: "Resizable div Element",
                date: "16-OCT-2020",
                excerpt: "A resizable div element using vanila JavaScript. Simply click and drag corner to scale div to any size.",
                link: "/blog/resizable-element"
            }
        ]

        const posts = postData.map( item => {
            return (
                <Post
                    key = {item.title} 
                    image = {item.image}
                    title = {item.title}
                    date = {item.date}
                    excerpt = {item.excerpt}
                    link = {item.link}
                    />
            )
        })
        console.log('data', postData);

        return(
            <div className={classes.Posts}>
                {posts}
            </div> 
        )
    }
}

export default Archive