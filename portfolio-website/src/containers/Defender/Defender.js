import React , {Component} from 'react';
import classes from './Defender.module.scss'

class Defender extends Component {
        state = {
            displayLearn: false,
            hide: false,
            erase: true
        }

        toggleLearn = () => {
            this.setState({displayLearn:true,erase:false,hide:false})
        }

        toggleErase = () => {
            this.setState({hide:true})
            setTimeout(()=>{
                this.setState({erase:true,})
            },500)

        }

    render(){
        let AnswerStyle = [classes.Answer, classes.Erase]
        if(this.state.displayLearn){
            AnswerStyle = [classes.Answer, classes.Show]
        }
        if(this.state.hide){
            AnswerStyle = [classes.Answer, classes.Hide]

        }
        if(this.state.erase){
            AnswerStyle = [classes.Answer, classes.Erase]

        }


    return (
        <div className={classes.Defender}>
            <div className={classes.DefenderHeader} >
                <div className={classes.Cover}>
                    <h2>I'm a Defender (ISFJ-T) and I'm here to help</h2>
                </div>
                <div className={classes.Image}></div>
                <p className={classes.Quote}>"Defenders are true altruists, meeting kindness with kindness-in-excess and engaging the work and people they believe in with enthusiasm and generosity." - <a href="https://www.16personalities.com/isfj-personality">16personalities</a></p>
                <small className={classes.Link}>Image from: <a href="https://www.16personalities.com/">https://www.16personalities.com/</a></small>
            </div>
            <div className={classes.Learn}>
                <div className={classes.Header}>
                    <div className={classes.Question}>
                        <h3>Not sure what that is?</h3>
                        <div className={classes.Triangle}></div>
                    </div>
                    <div className={classes.ButtonWrapper}>
                        <span className={classes.Button} onClick={this.toggleLearn}>Learn more about the 16Personalities</span>
                    </div>
                </div>
                <div className={AnswerStyle.join(' ')}>
                    <div className={classes.Close} onClick={this.toggleErase}>X</div>
                    <h4 className={classes.TitleMain}>Five Personality Aspects</h4>
                    <p className={classes.Introduction}>16Personalities use 5 types of personality aspects they believe best help to define a personality type. The 5 types of personality aspects are Mind, Energy, Nature, Tactics, and Identity. Each of these categories have two opposite traits they rate you on depending on  your answers in their assessment. They use a percentage of the two polar traits to determine which of the 16 personality types you fall under. The following definitions are from their site https://16personalities.com.</p>                    <div className={classes.Section}>
                    <div className={classes.Content}>
                        <div className={classes.Section}>
                            <h5 className={classes.Title}>Mind</h5>
                            <div className={classes.Intro}>This aspect shows how we interact with our surroundings:</div>
                            <div className={classes.Container}>
                                <p className={classes.Attribute}><strong>Introverted</strong> individuals prefer solitary activities and get exhausted by social interaction. They tend to be quite sensitive to external stimulation (e.g. sound, sight or smell) in general.</p>
                                <p className={classes.Attribute}><strong>Extraverted</strong> individuals prefer group activities and get energized by social interaction. They tend to be more enthusiastic and more easily excited than Introverts.</p>
                            </div>
                        </div>
                        <div className={classes.Section}>
                            <h5 className={classes.Title}>Energy</h5>
                            <div className={classes.Intro}>The second aspect determines how we see the world and process information:</div>
                            <div className={classes.Container}>
                                <p className={classes.Attribute}><strong>Observant</strong> individuals are highly practical, pragmatic and down-to-earth. They tend to have strong habits and focus on what is happening or has already happened.</p>
                                <p className={classes.Attribute}><strong>Intuitive</strong> individuals are very imaginative, open-minded and curious. They prefer novelty over stability and focus on hidden meanings and future possibilities.</p>
                            </div>
                        </div>
                        <div className={classes.Section}>
                            <h5 className={classes.Title}>Nature</h5>
                            <div className={classes.Intro}>This aspect determines how we make decisions and cope with emotions:</div>
                            <div className={classes.Container}>
                                <p className={classes.Attribute}><strong>Thinking</strong> individuals focus on objectivity and rationality, prioritizing logic over emotions. They tend to hide their feelings and see efficiency as more important than cooperation.</p>
                                <p className={classes.Attribute}><strong>Feeling</strong> individuals are sensitive and emotionally expressive. They are more empathic and less competitive than Thinking types, and focus on social harmony and cooperation.</p>
                            </div>
                        </div>
                        <div className={classes.Section}>
                            <h5 className={classes.Title}>Tactics</h5>
                            <div className={classes.Intro}>This aspect reflects our approach to work, planning and decision-making:</div>
                            <div className={classes.Container}>
                                <p className={classes.Attribute}><strong>Judging</strong> individuals are decisive, thorough and highly organized. They value clarity, predictability and closure, preferring structure and planning to spontaneity.</p>
                                <p className={classes.Attribute}><strong>Prospecting</strong> individuals are very good at improvising and spotting opportunities. They tend to be flexible, relaxed nonconformists who prefer keeping their options open.</p>
                            </div>
                        </div>
                        <div className={classes.Section}>
                            <h5 className={classes.Title}>Identity</h5>
                            <div className={classes.Intro}>Finally, the Identity aspect underpins all others, showing how confident we are in our abilities and decisions:</div>
                            <div className={classes.Container}>
                                <p className={classes.Attribute}><strong>Assertive</strong> (-A) individuals are self-assured, even-tempered and resistant to stress. They refuse to worry too much and do not push themselves too hard when it comes to achieving goals.</p>
                                <p className={classes.Attribute}><strong>Turbulent</strong> (-T) individuals are self-conscious and sensitive to stress. They are likely to experience a wide range of emotions and to be success-driven, perfectionistic and eager to improve.</p>
                            </div>
                        </div>
                        <div className={[classes.Section, classes.Center].join(' ')}>
                            <p className={classes.Quote}>"When people differ, a knowledge of type lessens friction and eases strain. In addition it reveals the value of differences. No one has to be good at everything." - Isabel Briggs Myer</p>
                            <p>Learn More about <a href="https://16personalities.com" >16Personalities</a></p>
                        </div>
                        <div className={classes.Exit} onClick={this.toggleErase}>Close</div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
    }
}

export default Defender