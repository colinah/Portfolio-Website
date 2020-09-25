import classes from './Education.module.scss';
import React, { Component } from 'react';
import Class from '../../assests/Education/Class.jpg'
import Dust from '../../assests/Education/Dust.jpg'
import Leech from '../../assests/Education/Leech.jpg'
import FieldCamp from '../../assests/Education/FieldCamp.jpg'
import Sample from '../../assests/Education/Sample.png'
import Presentation from '../../assests/Education/Presentation.png'
import Modal from './Modal/Modal';

class Education extends Component {
    render() {
        return(
            <div className={classes.Container}>
                 <div className={classes.Break}>
                    <div className={classes.Left}></div>
                    <h2 className={classes.Title}>Education</h2>
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
                        <div className={classes.Header}>Masters's of Science in Geology (Still in Progress)</div>
                        {/* <div className={classes.Images}>
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
                                skills = "Project-Management Research Critical-Thinking Problem-Solving Learning Creativity Long-Term-Planning Field-Work"
                                alt = ""
                                />
                            <Modal 
                                image = {Leech}
                                title = "Undergraduate Research #2"
                                description = "To help quantify dust deposition in the Salt Lake Area, we set up collection bins (designed by myself ) along the Wasatch Front. Collected dust would then go through a series of acid leech steps to be analyzed by a mass spectrometer to understand the elemental composition and isotope signatures. "
                                skills = "Attention-to-Detail Organization Dependability Consistency Laboratory-Skills Project-Management Ability-to-move-small-amounts-of-liqued-from-one-place-to-another"
                                alt = ""
                                />
                            <Modal 
                                image = {Sample}
                                title = "Undergraduate Research #3"
                                description = "We creatively use a combination of trace elemental concentrations and isotope signatures to help determine dust sources. We learned that the Great Salt Lake playa is a major contributor to dust pollution in the Salt Lake area. This is concerning because Utah wants to divert water from the Bear River which is a primary supplier to the lake. Doing so would worsen air pollution for the region."
                                skills = "Creativity Insightful Critical-Thinking  Data-Analysis Research Resourcefulness Problem-Solving"
                                alt = ""
                                />
                            <Modal 
                                image = {Presentation}
                                title = "Internatial Presentation"
                                description = 'The single greatest highlight of my undergraduate career was presenting my research at the International Dust Conference in Italy. My presentation was “Characterizing Dust Emissions From The Dry Lakebed of the Great Salt Lake Relative to Other Regional Dust Sources”. '
                                skills = "Presenting Communication Travel-Logistics Planning Adventure Bragging-Rights Perseverance Indesign Excel Data-Analysis"
                                alt = ""
                                />
                        </div> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default Education;