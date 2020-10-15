import React, { Component } from 'react';
import Aux from '../Aux/Aux'
import Nav from '../../containers/Nav/Nav';
// import NavMobile from '../../containers/NavMobile/NavMobile';
import Defender from '../../containers/Defender/Defender';
import Attributes from '../../containers/Attributes/Attributes';
import Skills from '../../containers/Skills/Skills';
import Header from '../../containers/Header/Header';
import Experience from '../../containers/Experience/Experience';
import Education from '../../containers/Education/Education';
import Blog from '../../containers/Blog/Blog';
import Footer from '../../containers/Footer/Footer';



class Layout extends Component {
    // constructor(props){
    //     super(props)
    //     //create a ref
    //     this.refAboutMe = React.createRef();
    //     this.refProjects = React.createRef();
    //     this.refContact = React.createRef();
    //  }
    componentWillMount() {
        document.title = 'Colin Hale'
      }

    //   logOffSet = (x) => {
    //       console.log(x)
    //   }
    //   scrollToMyRef = (ref) => window.scrollTo(0, ref)   

    render(){

        return (
            <Aux>
                <main> 
                <Header />
                {/* <NavMobile 
                    scrollAboutMe={(()=>this.scrollToMyRef(this.refAboutMe.current.offsetTop-60))}
                    scrollProjects={(()=>this.scrollToMyRef(this.refProjects.current.offsetTop-60))}
                    scrollContact={(()=>this.scrollToMyRef(this.refContact.current.offsetTop-60))} /> */}
                <Nav />
                <Defender />
                <Attributes />
                <Skills />
                <Experience />
                <Education />
                <Blog />
                <Footer />
                </main>
             </Aux>
        )
    }
}


export default Layout