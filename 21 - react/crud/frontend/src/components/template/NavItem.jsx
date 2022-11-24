import './NavItem.css'
import React from 'react'
import {Link} from 'react-router-dom'

const NavItem = props =>
    <Link className='nav-item' to={props.url}>
        <i className={`fa fa-${props.icon}`}></i> {props.title}
    </Link>

export default NavItem