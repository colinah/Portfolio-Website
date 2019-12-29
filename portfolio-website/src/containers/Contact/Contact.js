import React, { Component } from 'react';
import axios from 'axios';
import classes from './Contact.module.scss'

class Contact extends Component {
    state = {
        name:"",
        email:"",
        message:""
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = (e) => {
        e.preventDefault()
        console.log(this.state)
        axios.post('https://portfolio-69639.firebaseio.com/messages.json', this.state)
            .then(response => {
                console.log(response)
            }).catch(error=>{
                console.log(error)
            })

        this.setState({name: '',email:'',message:'Your Message has been sent.'})
    }


    render(){
        const {name, email, message} = this.state
        return(
            <div className={classes.ContactContainer}>
                <div className={classes.ContentContainer}>
                    <h2 className={classes.ContactTitle}>Contact</h2>
                    <h4>Have any questions or want to collaborate?</h4>
                    {/* <p className={classes.Success}>Your message has been sent.</p> */}
                    <form onSubmit = {this.submitHandler}>
                        <div className={classes.FormGroup}>
                            <input 
                                type="text"
                                placeholder='Name'
                                name = "name"
                                className={classes.Input}
                                value={name}
                                onChange={this.changeHandler}/>
                        </div>
                        <div className={classes.FormGroup}>
                            <input
                                type="email"
                                placeholder='Email'
                                name = "email"
                                className={classes.Input}
                                value={email}
                                onChange={this.changeHandler}/>
                        </div>
                        <div className={classes.FormGroup}>
                            <input
                                type="textarea"
                                placeholder='Message'
                                name = "message"
                                className={classes.AreaInput}
                                value={message}
                                onChange={this.changeHandler}/>
                        </div>
                        <button type="submit" className={classes.Button}>Submit</button>
                    </form>
                </div>
                
            </div>
        )
    }

}

export default Contact;