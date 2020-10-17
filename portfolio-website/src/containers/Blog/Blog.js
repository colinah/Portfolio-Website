import React, { Component } from 'react'
import Post from './Post/Post';
import classes from './Blog.module.scss';

class Blog extends Component {
    render() {
        const postData = [
            {
                image: require('../../assests/Blog/scale.png'),
                title: "Resizable div Element",
                date: "16-OCT-2020",
                excerpt: "A resizable div element using vanila JavaScript. Simply click and drag corner to scale div to any size.",
                link: "/blog/resizable-element"
            },
            {
                image: require('../../assests/Blog/Flexbox.png'),
                title: "Interactive Flexbox Layouts",
                date: "17-OCT-2020",
                excerpt: "Toggle between different flexbox settings to better understand how flexbox works.",
                link: "/blog/flexbox-layouts"
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
            <div className={classes.Container}>
                 <div className={classes.Break}>
                    <div className={classes.Left}></div>
                    <div className={classes.Center}><h2 className={classes.Title}>Blog</h2></div>
                    <div className={classes.Right}></div>
                </div>
                <div className={classes.Posts}>
                    {posts}
                </div> 
            </div>
        )
    }
}

export default Blog