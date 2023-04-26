import Nav from "./Components/Nav";
import Button from "./Components/Button";
import Footer from "./Components/Footer";
import Tab from "./Components/Tab";
import Event from "./Components/Event";
import { useState } from "react";
import {Link, useParams} from 'react-router-dom';

const Organiser= ()=>{

    const uid = useParams();

    console.log(uid.id);
    const [select, setSelect]= useState([true, false]);
    const clickHandler=() =>{
        setSelect([!select[0], !select[1]]);
    }

    const data={
        name: "Event Name",
        host: "Host Name",
        time: "Time",
        seats: "Seats",
        location: "Location",
        cost: "Cost",
        description:"Description"
    }

    return(
        <div className="h-screen">
            <Nav />
            <div className="flex flex-col justify-between h-full">
                <section className="p-10 flex flex-col gap-10">
                    <div className="flex flex-row gap-2 justify-between border-b-2 border-slate-500 py-2">
                        <div className="flex flex-row gap-2">
                            <Tab text="Upcoming Events" selected={select[0]} onClick={clickHandler}/>
                            <Tab text="Past Events" selected={select[1]} onClick={clickHandler}/>
                        </div>
                        <Link to={"/addevent/"+uid.id}>
                            <Button text="New Event" size="text-xl" rounded="rounded-md"/>
                        </Link>
                    </div>
                    <section className="px-10 pb-10 w-full flex flex-col gap-5">
                        <Event name={data.name} des={data.description} time={data.time} location={data.location}/>
                    </section>
                </section>
                <section id="footer">
                    <Footer />
                </section>
            </div>
        </div>
    );
}

export default Organiser;