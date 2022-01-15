import React from 'react'
import Error404 from "./pages/Error404";
import {PreJunior} from "./pages/PreJunior";
import {Routes, Route} from "react-router-dom";
import {Junior} from "./pages/Junior";
import {JuniorPlus} from "./pages/JuniorPlus";

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIOR_PLUS: '/junior+'
}

export function AllRoutes() {
    return (
        <div>
            {/*Switch deprecated <Routes> is the new <Switch>*/}
            <Routes>
                {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
                {/*exact был нужен чтоб указать полное совпадение (что после '/' ничего не будет) - теперь это поведение по умолчанию*/}
                {/*Any component whose pathname is a backslash will get rendered first whenever the app loads for the first time*/}
                <Route path={'/'} element={<PreJunior/>}/>
                <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
                <Route path={PATH.JUNIOR} element={<Junior/>}/>
                <Route path={PATH.JUNIOR_PLUS} element={<JuniorPlus/>}/>
                {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
                <Route path={'/*'} element={<Error404/>}/>
            </Routes>
        </div>
    )
}
