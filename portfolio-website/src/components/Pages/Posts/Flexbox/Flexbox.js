import React, { Component } from 'react';
import classes from './Flexbox.module.scss';

class Flexbox extends Component {
    render() {
        return(
            <section>
            <article>
                <section>
                    <div className={classes.Content}>
                        <h1 className={classes.Title}>Interactive Flexbox Layouts</h1>
                        <p className={classes.Text}>When I was first learning Flexbox it was a bit confusing understanding how to build the layouts I wanted. I thought it would be nice to have an interactive display to see what each of the different Flexbox components do. You can use the below codepen to play with different layouts and see what they do.</p>
                    <div className={classes.Iframe}>
                        <iframe
                            title="flexbox"
                            scrolling="no"
                            frameborder="0"
                            width="100%"
                            height="640"
                            id="dyXMmaP"
                            src="https://codepen.io/Colinah/embed/preview/dyXMmaP?default-tabs=js%2Cresult&amp;embed-version=2&amp;height=600&amp;host=https%3A%2F%2Fcodepen.io&amp;slug-hash=dyXMmaP"
                            allowfullscreen="true">
                        </iframe>
                    </div>
                    </div>
                </section>
            </article>
        </section>
        )
    }
}

export default Flexbox;