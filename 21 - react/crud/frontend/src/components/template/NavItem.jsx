import './NavItem.css'
import React from 'react'

const NavItem = props =>
    <a className='nav-item' href={props.url}>
        <i className={`fa fa-${props.icon}`}></i> {props.title}
    </a>

export default NavItem