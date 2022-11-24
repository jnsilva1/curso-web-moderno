import React from "react"
import { Routes as ReactRoutes, Route} from 'react-router-dom'



import Home from "../components/home/Home"
import UserCrud from "../components/user/UserCrud"

const Routes = props =>(
    <ReactRoutes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/users" element={<UserCrud/>}/>
        <Route path="*" element={<Home/>}/>
    </ReactRoutes>
);


export default Routes