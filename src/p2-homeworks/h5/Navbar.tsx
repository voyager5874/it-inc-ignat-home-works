import React from 'react'
import s from "./Navbar.module.css"
import {NavLink, useNavigate} from "react-router-dom";
import {PATH} from "./AllRoutes";

function Navbar() {
    // you can use useNavigate to push users to various pages

    // const navigate = useNavigate()
    // navigate(PATH.PRE_JUNIOR)

    return (
            <div className={s.navbar}>
                <NavLink to={PATH.PRE_JUNIOR} className={({isActive}) => isActive ? s.activeLink : s.defaultLink}>pre-junior</NavLink>
                <NavLink to={PATH.JUNIOR} className={({isActive}) => isActive ? s.activeLink : s.defaultLink}>junior</NavLink>
                <NavLink to={PATH.JUNIOR_PLUS} className={({isActive}) => isActive ? s.activeLink : s.defaultLink}>junior+</NavLink>
                <div className={s.navbarArrow}></div>
        </div>
    )
}

export default Navbar
