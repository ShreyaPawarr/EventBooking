import Nav from "./Components/Nav";
import Button from "./Components/Button";
import Footer from "./Components/Footer";
import Tab from "./Components/Tab";
import Event from "./Components/Event";
import { useEffect, useState } from "react";
import {Link, useParams} from 'react-router-dom';
import axios from "axios";

const Organiser= ()=>{


    const [data,userData] = useState([]);
    const uid = useParams();

    const [select, setSelect]= useState([true, false]);
    const clickHandler=() =>{
        setSelect([!select[0], !select[1]]);
    }
    const client = axios.create({
        baseURL: "http://localhost:3000/"
    })
    useEffect(() => {
    
        client.get("manager/events/"+uid.id)
        .then(result => {
           return result.data;
        })
        .then(data => {
            console.log(data);
            userData(data);
        }).catch(err => console.log(err))
    },[])

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
                        {data.length>0? 
                        data.map( (d)=> {
                            return(<Event key={d._id} id={d._id} name={d.name} des={d.description} time={d.time} location={d.location}/>)
                        }):
                            <div className="flex flex-col justify-center items-center gap-2">
                                <h1 className="text-5xl font-bold roboto">No Events</h1>
                                <p className="text-2xl">Create an event to get started</p>
                            </div>
                        }
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