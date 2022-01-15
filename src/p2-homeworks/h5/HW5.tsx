import React from 'react'
import Navbar from './Navbar'
import {AllRoutes} from './AllRoutes'
import {HashRouter} from "react-router-dom";

function HW5() {
    return (
        <div>
            {/*в gh-pages лучше работает HashRouter*/}
            <HashRouter>

            <Navbar/>
            <AllRoutes/>

            </HashRouter>
        </div>
    )
}

export default HW5
