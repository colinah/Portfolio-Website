import classes from './Education.module.scss';
import React, { Component } from 'react';
import Class from '../../assests/Education/Class.jpg'
import Dust from '../../assests/Education/Dust.jpg'
import Leech from '../../assests/Education/Leech.jpg'
import FieldCamp from '../../assests/Education/FieldCamp.jpg'
import Sample from '../../assests/Education/Sample.png'
import Presentation from '../../assests/Education/Presentation.png'
import Snow from '../../assests/Education/SnowSampling.jpg'
import Water from '../../assests/Education/WaterSampling.jpg'
import Snowy from '../../assests/Education/RiverSnowy.jpg'
import Poster from '../../assests/Education/Poster.png'
import Modal from './Modal/Modal';

class Education extends Component {
    render() {
        return(
            <div className={classes.Container}>
                 <div className={classes.Break}>
                    <div className={classes.Left}></div>
                    <div className={classes.Center}><h2 className={classes.Title}>What have I learned?</h2></div>
                    <div className={classes.Right}></div>
                </div> 
                <div className={classes.Content}>
                    <div className={classes.Section}>
                        <div className={classes.Header}>Bachelor's of Science in Geology</div>
                        <div className={classes.Images}>
                            <Modal 
                                image = {Class}
                                title = "Geology Class Work"
                                description = 'Scientists sarcastically state that geology isn’t a real science. That is, geology isn’t a “foundational” field of science but the application of them to our planet and solar system. This gives geologists a good understanding of physics, biology, chemistry and mathematics.'
                                skills = '“Science” Problem-Solving Mathematics Statistics Writing Microsoft-Office ArcGIS Illustrator Photoshop Design '
                                alt = "Geology Class Work"
                                />
                            <Modal 
                                image = {FieldCamp}
                                title = "Geology Field Camp"
                                description = "Field Camp is traditional for Geology Majors. Field came is an intensive outdoor course applying your knowledge and laboratory skills to solve geologic problems. My field camp was working twelve hours a day for six weeks of “fun”  while living in a tent mapping geological features in southern Utah. "
                                skills = "Problem-Solving Hard-Working Attention-to-Details ArcGIS Writing Illustrator Photoshop Excel Sleeping-In-Tents"
                                alt = "Geology Field Camp"
                                />
                            <Modal 
                                image = {Dust}
                                title = "Undergraduate Research #1"
                                description = "Salt Lake County and the surrounding areas have a significant problem with air pollution. The two primary sources of air pollution are human and playa dust. I worked on a Forestry Fire and State Land grant to help quantify the amount of dust sourced from playas in the surrounding region."
                                skills = "Research Critical-Thinking Problem-Solving Learning Creativity Long-Term-Planning Field-Work"
                                alt = "Undergraduate Research #1"
                                />
                            <Modal 
                                image = {Leech}
                                title = "Undergraduate Research #2"
                                description = "To help quantify dust deposition in the Salt Lake Area, we set up collection bins (designed by myself ) along the Wasatch Front. Collected dust would then go through a series of acid leech steps to be analyzed by a mass spectrometer to understand the elemental composition and isotope signatures. "
                                skills = "Attention-to-Detail Organization Dependability Consistency Laboratory-Skills Ability-to-move-small-amounts-of-liqued-from-one-place-to-another"
                                alt = "Undergraduate Research #2"
                                />
                            <Modal 
                                image = {Sample}
                                title = "Undergraduate Research #3"
                                description = "We creatively use a combination of trace elemental concentrations and isotope signatures to help determine dust sources. We learned that the Great Salt Lake playa is a major contributor to dust pollution in the Salt Lake area. This is concerning because Utah wants to divert water from the Bear River which is a primary supplier to the lake. Doing so would worsen air pollution for the region."
                                skills = "Creativity Insightful Critical-Thinking  Data-Analysis Research Resourcefulness Problem-Solving"
                                alt = "Undergraduate Research #3"
                                />
                            <Modal 
                                image = {Presentation}
                                title = "International Dust Conference"
                                description = 'The single greatest highlight of my undergraduate career was presenting my research at the International Dust Conference in Italy. My presentation was “Characterizing Dust Emissions From The Dry Lakebed of the Great Salt Lake Relative to Other Regional Dust Sources”. '
                                skills = "Presenting Communication Travel-Logistics Planning Adventure Bragging-Rights Perseverance Indesign Excel Data-Analysis"
                                alt = "International Dust Conference"
                                />
                        </div>
                    </div>
                    <div className={classes.Section}>
                        <div className={classes.Header}>Masters's of Science in Geology</div>
                        <div className={classes.Images}>
                            <div>
                                <Modal 
                                    image = {Water}
                                    title = "Master's of Science #1"
                                    description = 'My Master’s of Science was research based. This means that I had to do course work, a thesis project and assistant teaching. I was lucky to work on a National Science Foundation grant to help understand water chemistry and quality in the Provo River, Utah.'
                                    descriptionTwo = "This was a huge project and involved two other graduate students and several undergraduate assistants. I was responsible for describing the process that controls river chemistry .The other two graduate students were over chemistry description and mercury processes."
                                    descriptionThree = "In addition to collaborating with the other graduate students on sampling procedures, laboratory processes and data analysis. I mentored and managed  more than five undergraduate students instructing them on research methods and protocols."
                                    skills = 'Collaborating Mentoring Project-Management Teamwork Teaching Time-Management Organization Enthusiasm Leadership'
                                    alt = "Master's of Science"
                                    />
                                    <div style={{paddingTop: '10px', width: '100%'}}></div>
                                <Modal 
                                    image = {Poster}
                                    title = "Presentations Publications Review"
                                    description = "Part of doing a research thesis is to pass your dissertation review. To pass the review you need to give a presentation to your committee and have them approve your thesis. I passed with their comment that I did the same amount of work PhD students do. During my Masters I presented at seven conferences and have three publications."
                                    skills = "Writing Public-Speaking Confidence Results-Oriented Collaboration Persistence Time-Management"
                                    alt = "Presentations and Publications"
                                    />
                            </div>  
                            <div>
                                <Modal 
                                    image = {Snow}
                                    title = "Sampling and Lab Procedures"
                                    description = "My project involved a plethora of field and lab work. I had the privilege of digging 10+ feet deep snow pits on numerous occasions and doing weekly river water sampling. All the samples that we collected resulted in numerous hours in clean labs processing them. Processing samples usually looked like we were just moving small amounts of liquids from one container into another."
                                    skills = "Hard-work Organization Meticulous Methodical"
                                    alt = "Sampling and Lab Procedures"
                                    />
                                <Modal 
                                    image = {Snowy}
                                    title = "Master's of Science #2"
                                    description = "As with all things in life, my thesis didn’t go as planned. We ran into a major stumbling block known as the Catchment Basin Paradox. Simply put, during melt-water or rain events when you would expect to see a dilution of concentrations in the river you see the opposite."
                                    descriptionTwo = "I was beyond my capacity to understand the multi-decade paradox and reached out to collaborate with an expert in the field. With his understanding of catchment basins and my expertise in trace elements and isotopes we were able to unveil some of the mechanisms resulting in the paradox."
                                    descriptionThree = "Previous catchment basin models relied on two general flow paths from source to river, these are overland flow and groundwater flow. Using strontium isotopes we were able to tell that water from the melt source overfilled the capacity for water to penetrate all the way to the ground water but instead would flow above the water table."
                                    skills = "Adaptability Problem-Solving Creativity Communication Collaboration Research Self-Direction"
                                    alt = "Master's of Science #2"
                                    />
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Education;