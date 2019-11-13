import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem'
import classes from './NavigationItems.module.css';

const navigationItems = () => (
    <ul className = {classes.NavigationItems}>
        <NavigationItem link="/">About Me</NavigationItem>
        <NavigationItem link="/portfolio">Portfolio</NavigationItem>
        <NavigationItem link="/contact">Contact</NavigationItem>

    </ul>
);

export default navigationItems