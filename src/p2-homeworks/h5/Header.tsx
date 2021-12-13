import React from 'react'
import s from "./Header.module.css"
import {NavLink} from "react-router-dom";
import {PATH} from "./AllRoutes";

function Header() {


    return (
            <div className={s.navbar}>
                <NavLink to={PATH.PRE_JUNIOR} className={({isActive}) => isActive ? s.activeLink : s.defaultLink}>pre-junior</NavLink>
                <NavLink to={PATH.JUNIOR} className={({isActive}) => isActive ? s.activeLink : s.defaultLink}>junior</NavLink>
                <NavLink to={PATH.JUNIOR_PLUS} className={({isActive}) => isActive ? s.activeLink : s.defaultLink}>junior+</NavLink>
                <div className={s.navbarArrow}></div>
        </div>
    )
}

export default Header
