import React from 'react'
import classes from './Header.module.scss'

import {
    Link,
    NavLink,
} from 'react-router-dom'
 
const Header = () =>{
    return(
            <div className={classes.topNav}>
                <NavLink className={classes.link} activeClassName={classes.linkActive} exact to="/">home</NavLink>
                <NavLink className={classes.link} activeClassName={classes.linkActive}  to="/product">product</NavLink>
                <NavLink className={classes.link} activeClassName={classes.linkActive}  to="/about">about</NavLink>

            </div>
    )
}
export default Header