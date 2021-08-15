import React from 'react'
import MenuItem from './MenuItem'

function Menu() {
    return (
        <div className="menu">
            <div className="menu-header">
                <div className="menu-header__text">Menu</div>
            </div>
            <div className="menu-list">
                <MenuItem></MenuItem>
                <MenuItem></MenuItem>
                <MenuItem></MenuItem>
                <MenuItem></MenuItem>
                <MenuItem></MenuItem>
                <MenuItem></MenuItem>
                <MenuItem></MenuItem>
            </div>
        </div>
    )
}

export default Menu
