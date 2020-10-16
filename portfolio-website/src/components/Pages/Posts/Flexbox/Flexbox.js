import React, { Component } from 'react';
import classes from './Flexbox.module.scss';

class Flexbox extends Component {
    render() {
        return(
            <section>
                <article>
                    <h1 className={classes.Title}>10 CSS Flexbox Layouts</h1>
                    <section>
                        <div>Quick view</div>
                        <div>
                            <ol>
                                <li>Flexbox Center Content</li>
                                <li>Three Column Flexbox Layout</li>
                                <li>Image Gallory Flexbox Layout</li>
                            </ol>
                        </div>
                    </section>
                    <section>
                        <h2>CSS Layout title</h2>
                    {/* <iframe allowfullscreen="true" allowpaymentrequest="true" allowtransparency="true" class="cp_embed_iframe " frameborder="0" height="640" name="cp_embed_1" scrolling="no" src="https://codepen.io/Diegue/embed/wgRvwZ?height=640&amp;theme-id=0&amp;slug-hash=wgRvwZ&amp;default-tab=result&amp;user=Diegue&amp;embed-version=2&amp;pen-title=Flexbox%20%40Toptal%20-%20Parent%20-%20%60display%60%20property&amp;name=cp_embed_1" style="width: 100%; overflow:hidden; display:block;" title="Flexbox @Toptal - Parent - `display` property" loading="lazy" id="cp_embed_wgRvwZ"></iframe> */}
                    <iframe className={classes.Iframe} allowfullscreen="true" allowpaymentrequest="true" allowtransparency="true" class="cp_embed_iframe " frameborder="0" height="640" width="760" name="cp_embed_1" scrolling="no" src="https://codepen.io/Diegue/embed/wgRvwZ?height=640&amp;theme-id=0&amp;slug-hash=wgRvwZ&amp;default-tab=result&amp;user=Diegue&amp;embed-version=2&amp;pen-title=Flexbox%20%40Toptal%20-%20Parent%20-%20%60display%60%20property&amp;name=cp_embed_1" title="Flexbox @Toptal - Parent - `display` property" loading="lazy" id="cp_embed_wgRvwZ"></iframe>

                    </section>
                    <section>
                        <h2>CSS Layout title</h2>
                    {/* <iframe allowfullscreen="true" allowpaymentrequest="true" allowtransparency="true" class="cp_embed_iframe " frameborder="0" height="640" name="cp_embed_1" scrolling="no" src="https://codepen.io/Diegue/embed/wgRvwZ?height=640&amp;theme-id=0&amp;slug-hash=wgRvwZ&amp;default-tab=result&amp;user=Diegue&amp;embed-version=2&amp;pen-title=Flexbox%20%40Toptal%20-%20Parent%20-%20%60display%60%20property&amp;name=cp_embed_1" style="width: 100%; overflow:hidden; display:block;" title="Flexbox @Toptal - Parent - `display` property" loading="lazy" id="cp_embed_wgRvwZ"></iframe> */}
                    <iframe 
                        className={classes.Iframe} 
                        allowfullscreen="true" 
                        allowpaymentrequest="true" 
                        allowtransparency="true" 
                        class="cp_embed_iframe " 
                        frameborder="0" 
                        height="640" 
                        width="760" 
                        name="cp_embed_1" 
                        scrolling="no" 
                        src="https://codepen.io/colinah/pen/wvWMLrJ?height=640&amp;theme-id=0&amp;slug-hash=wvWMLrJ&amp;default-tab=result&amp;user=Colinah&amp;embed-version=2&amp;"
                        title="3 Column Flexbox"
                        loading="lazy"
                        id="cp_embed_wvWMLrJ"></iframe>

                    </section>
                </article>
                <div className={classes.Space}></div>
            </section>
        )
    }
}

export default Flexbox;