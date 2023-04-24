import User from "./User";
import { useState } from "react";
import Button from "./Button";
import {useLocation, Link } from 'react-router-dom';

const Nav= () =>{

    const [login, setLogin]= useState(false);

    const location = useLocation();
    if(location.pathname === "/")
    {
        return (
            <div className="roboto flex flex-row justify-between px-10 py-4 bg-slate-200 ">
                <h1 className="text-4xl">Evnt</h1>
                <div className="flex flex-row gap-4 items-center h-full">
                    <a className="hover:cursor-pointer"><h2 className="text-xl hover:decoration-solid hover:decoration-2">Team</h2></a>
                    <Link to="login"><h2 className="text-xl">Organise</h2></Link>
                    <Link to="login"><Button text="Login" type="outline" size="text-xl"/></Link>
                </div>
            </div>
        )
    }
    else if (location.pathname === "/events")
    {
        return(
        <div className="roboto flex flex-row justify-between px-10 py-4 bg-slate-200 items-center ">
            <Link to="/"><h1 className="text-4xl">Evnt</h1></Link>
            <div className="flex flex-row gap-14 items-center">
                <div className="flex gap-4">
                    <Link to="/events">
                        <h2 className="text-xl">Home</h2>
                    </Link>
                    <h2 className="text-xl">Events</h2>
                    <h2 className="text-xl">Contact</h2>
                </div>
                <input className="rounded-full border-2 border-black px-4 py-2 focus:border-[#4DC4A4]" type="text" placeholder="Search for Events"/>
            </div>
            {login? <User/> : <Link to="/loginUser"><Button text="Login" type="outline" size="text-xl"/></Link>}
        </div>
        )
    }
    else if (location.pathname === "/login" || location.pathname === "/signup")
    {
        return(
            <div className="roboto flex flex-row justify-between px-10 py-4 bg-slate-200 items-center ">
                <Link to="/"><h1 className="text-4xl">Evnt</h1></Link>
                <Link to="/events"><Button text="Book Events" type="outline" size="text-lg" /></Link>
            </div>
        )
    }
    else if (location.pathname === "/loginUser" || location.pathname === "/signupUser")
    {
        return(
            <div className="roboto flex flex-row justify-between px-10 py-4 bg-slate-200 items-center ">
                <Link to="/"><h1 className="text-4xl">Evnt</h1></Link>
                <Link to="login"><Button text="Organise Events" type="outline" size="text-lg" /></Link>
            </div>
        )
    }
}

export default Nav;   