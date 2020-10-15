import React, { Component } from 'react'
import Post from './Post/Post';
import classes from './Blog.module.scss';

class Blog extends Component {
    render() {
        const postData = [
            {
                image: require('../../assests/Education/Class.jpg'),
                title: "Title of the  post",
                date: "01-OCT-2020",
                excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec massa at erat facilisis consequat id id orci. Cras vitae velit in nisl gravida commodo.",
                link: "/blog"
            },
            {
                image: require('../../assests/Education/Class.jpg'),
                title: "Title of the post",
                date: "01-OCT-2020",
                excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec massa at erat facilisis consequat id id orci. Cras vitae velit in nisl gravida commodo.",
                link: "/blog"
            },
            {
                image: require('../../assests/Education/Class.jpg'),
                title: "Title o the  post",
                date: "01-OCT-2020",
                excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec massa at erat facilisis consequat id id orci. Cras vitae velit in nisl gravida commodo.",
                link: "/blog"
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