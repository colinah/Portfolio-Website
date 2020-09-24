import React, {Component} from 'react';
// import HelixCreations from './Project/HelixCreations/HelixCreations';
// import HelixConstruction from './Project/Helix/HelixConstruction';
// import AscendPnr from './Project/AscendPnr/AscendPnr';
// import BurgerProject from './Project/BurgerProject/BurgerProject';
// import HackerRank from './Project/HackerRank/HackerRank';
// import CSS from './Project/CSS/CSS';
import classes from './Projects.module.scss';
// import Modal from '../../components/UI/Modal/Modal';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Project from './Project/Project';



class Projects extends Component {
    state = {
        showDetails: false,
        showModal: false,
    }

    modalClosedHandler = () => {
        this.setState({showModal:false})
    }
    modalOpenHandler = (display) => {
        this.setState({showModal:true})
    }



    render (){
        return (

            
                <Query query={gql`
                {
                    projects {
                        edges {
                            node {
                                title
                                id
                                content
                                projectsMeta {
                                    link
                                    gitlink
                                    image {
                                        mediaItemUrl
                                    }
                                    excerpt
                                    color
                                }
                            }
                        }
                    }
                }
                `}>

                {
                    ({loading, error, data}) => {
                        if(loading) {
                            return (<h1>loading....</h1>)
                        } else if (error)  {
                            console.log(error)
                            return error
                        }              
                        return (
                        <div className={classes.ProjectsContainer}>
                            <div className={classes.TitleContainer}>
                                <h2 className={classes.Title}>Projects</h2>
                            </div>
                            <div className={classes.ProjectsContent}>
                                {
                                 data.projects.edges.map((project,key)=>{
                                    return (
                                            <Project key={key}
                                            title = {project.node.title}
                                            discription = {project.node.projectsMeta.excerpt}
                                            gitLink = {project.node.projectsMeta.gitlink} 
                                            link = {project.node.projectsMeta.link} 
                                            backgroundurl = {project.node.projectsMeta.image.mediaItemUrl}
                                            backgroundcolor = {project.node.projectsMeta.color} />
                                        )
                                    })
                                }
                                {/* <HelixCreations />
                                <AscendPnr />
                                <HelixConstruction />
                                <BurgerProject />
                                <CSS />
                                <HackerRank /> */}
                            </div>
                        </div>
                        )
                    }
                }

                </Query>

            
        )
    }
}

export default Projects;