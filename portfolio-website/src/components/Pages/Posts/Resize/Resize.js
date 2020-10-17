import React, { Component } from 'react';
import classes from './Resize.module.scss';

class Flexbox extends Component {
    render() {
        return(
            <section>
                <article>
                    <h1 className={classes.Title}>Resizable div Element</h1>
                    <section>
                        <div className={classes.Content}>
                            <p className={classes.Text}>If you want to make your own div resizable by dragging the bottom right corner, feel free to copy and paste the JavaScript resize function. All you will need to do is pass the id of the div into the first parameter of the function and the id of your button into the second parameter. I recommend placing the button in the bottom right corner of the resizable div.</p>
                        </div>
                        <div className={classes.Iframe}>
                            <iframe
                                title="resize"
                                scrolling="no"
                                frameborder="0"
                                width="100%"
                                height="640"
                                id="MWeKMdz"
                                src="https://codepen.io/Colinah/embed/preview/MWeKMdz?default-tabs=js%2Cresult&amp;embed-version=2&amp;height=600&amp;host=https%3A%2F%2Fcodepen.io&amp;slug-hash=MWeKMdz"
                                allowfullscreen="true">
                            </iframe>
                        </div>
                        <div className={classes.Content}>
                            <h2 className={classes.Title}>Learn how to build a resizable div with JavaScript</h2>
                            <p className={classes.Text}>We want the element to be resized by following the mouse when the button in the bottom right corner of the element is clicked and dragged. There are three parts to a click and drag input which is the same as a drag and drop input. We need to initialize the function with a click. Then have the function do something while the mouse is moving. Lastly, the function needs to stop or drop when the user releases the mouse button.</p>
                            <p className={classes.Text}>To add event listeners for click, move and release we use the ‘mousedown’, ‘mousemove’, and ‘mouseup’ event listeners.  We want to set up the listeners in the following way so that the ‘mousemove’ function ends when the mouse press event finishes. This is what gives us the click and drag or drag and drop effect.</p>
                            <div className={classes.Code}>
                                <code>const button = document.getElementById(elementId);</code><br />
                                <code className={classes.Indent}>button.addEventListener('mousedown', function(e){"{"} </code><br />
                                <code className={classes.Indent}>{"//"}add mousedown functions here </code><br />
                                <code className={classes.Indent}>window.addEventListener('mousemove', scale); </code><br />
                                <code className={classes.Indent}>window.addEventListener('mouseup', removeScale); </code><br />
                                <code>{"}"});</code><br />
                            </div>
                            <p className={classes.Text}>Now that we have the bones of our click event structured, we need to add the functionality to resize the div. I think the easiest way to go about this is to directly change the elements width and height based on relative mouse position. To do this we need to get the initial mouse position on the ‘mousedown’ event. Then we can change the element size with the difference between the original mouse position and the current mouse position. This means that we also need to get the initial width and height of the element. We can do this with the following code:</p>
                            <div className={classes.Code}>
                                <code>{"//"}Get the mouse positions - add inside the mousedown event listener function</code><br />
                                <code>function getMousePositions(e) {"{"}</code><br />
                                <code className={classes.Indent}>mouseX = e.pageX;</code><br />
                                <code className={classes.Indent}>mouseY = e.pageY;</code><br />
                                <code>{"{"}</code><br />
                            </div>
                            <div className={classes.Code}>
                                <code>{"//"}Get the elements dimensions  - add inside the mousedown event listener function</code><br />
                                <code>function getElementDimensions() {"{"}</code><br />
                                <code className={classes.Indent}>initialWidth = element.clientWidth;</code><br />
                                <code className={classes.Indent}>initialHeight = element.clientHeight;</code><br />
                                <code>{"{"}</code><br />
                            </div>
                            <p className={classes.Text}>Now that we have the initial mouse position and element size we can change the elements width and height with the following code:</p>
                            <div className={classes.Code}>
                                <code>{"//"}Change the size of the elements dimensions</code><br />
                                <code className={classes.Indent}>function scale(e) {"{"}</code><br />
                                <code className={classes.Indent}>const width = initialWidth + (e.pageX - mouse_x);</code><br />
                                <code className={classes.Indent}>const height = initialHeight + (e.pageY - mouse_y);</code><br />
                                <code className={classes.Indent}>element.style.width = width + 'px';</code><br />
                                <code className={classes.Indent}>element.style.height = height + 'px';</code><br />
                                <code>{"{"}</code><br />
                            </div>
                            <p className={classes.Text}>The last thing we need to add is removing the mousemove event listener function to stop scaling the element when the press event is released. </p>
                            <div className={classes.Code}>
                                <code>{"//"}Remove the mousemove event listener function</code><br />
                                <code>function removeScale() {"{"}</code><br />
                                <code className={classes.Indent}>window.removeEventListener( 'mousemove', scale);</code><br />
                                <code>{"{"}</code><br />
                            </div>
                            <p className={classes.Text}>I challenge you to put all the code together to finish the resize function. Don’t forget you need to set up all the variables. If you are struggling be sure to look at the codepen example on the top of the page. The example also shows how to add compatibility with mobile devices.</p>
                        </div>
                    </section>
                </article>
            </section>
        )
    }
}

export default Flexbox;