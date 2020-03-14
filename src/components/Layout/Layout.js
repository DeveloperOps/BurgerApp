import React from 'react'
import Aux from '../../highoc/Auxilary';
import classes from './Layout.module.css'
const layout = (props) => {
    return (
    <Aux>
        <div> toolbar sidedrw </div>
        <main className={classes.Content}> {props.children} </main>
    </Aux>
    );
}

export default layout;