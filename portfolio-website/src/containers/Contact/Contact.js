import React, { Component } from 'react';
import classes from './Contact.module.scss'

class Contact extends Component {
    render(){
        return(
            <div className={classes.ContactContainer}>
                <h2 className={classes.ContactTitle}>Contact</h2>
                <h4>Have any questions or want to collaborate?</h4>
                <form>
                    <div className={classes.FormGroup}>
                        <input type="text" placeholder='Name' className={classes.Input}/>
                    </div>
                    <div className={classes.FormGroup}>
                        <input type="email" placeholder='Email' className={classes.Input}/>
                    </div>
                    <div className={classes.FormGroup}>
                    <input type="textarea" placeholder='Message'className={classes.AreaInput}/>
                    </div>
                </form>
            </div>
        )
    }

}

export default Contact;