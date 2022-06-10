import React, { useEffect } from 'react'
import classes from './HomePage.module.scss'
import { withRouter } from "react-router-dom";

const HomePage = (props) => {
    const {
        history
    } = props
    console.log(props)
    // useEffect(() =>{
    //     setTimeout(() =>{
    //         history.push('/about')
    //     }, 3000)
    // })
    const HandleClick = () => {
        console.log('clickme')
        setTimeout(() => {
            history.push('/about')
        }, 3000)
    }
    return (
        <div className={classes.container}>
            <div className={classes.banner}>
                banner
            </div>
            <div className={classes.content}>
                hieu ung
            </div>
            <button onClick={HandleClick}>click</button>
        </div>
    )
}

export default withRouter(HomePage)