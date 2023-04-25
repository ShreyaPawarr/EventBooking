import Nav from "./Components/Nav";
import Button from "./Components/Button";
import Footer from "./Components/Footer";
import {Link} from 'react-router-dom';

const AddEvent=() =>{
    return(
        <div>
            <Nav/>
            <section className="flex flex-col justify-center items-center p-10 w-full">
                <div className="flex flex-col justify-center items-center w-2/3">
                        <div className="form flex flex-col bg-slate-200 gap-8 p-10 rounded-xl">
                            <div className="flex flex-col gap-1 justify-center items-center">
                                <h1 className="text-5xl font-bold roboto">Let's Create an Event</h1>
                            </div>
                            <form className="flex flex-col gap-4">
                                <div className="flex flex-col justify-center items-start gap-2">
                                    <label className="text-2xl" htmlFor="name">Name</label>
                                    <input className="w-full border-2 border-black px-4 py-2 rounded-full focus:border-[#4DC4A4]" type="name" name="name" id="name" placeholder="Enter event name"/>
                                </div>
                                <div className="flex flex-col justify-center items-start gap-2">
                                    <label className="text-2xl" htmlFor="hostName">Name of Host</label>
                                    <input className="w-full border-2 border-black px-4 py-2 rounded-full focus:border-[#4DC4A4]" type="text" name="hostName" id="hostName" placeholder="Who is hosting the Event?"/>
                                </div>
                                <div className="flex flex-col justify-center items-start gap-2">
                                    <label className="text-2xl" htmlFor="eventDate">Date of Event</label>
                                    <input className="w-full border-2 border-black px-4 py-2 rounded-full focus:border-[#4DC4A4]" type="date" name="eventDate" id="eventDate" placeholder="When is the Event?"/>
                                </div>
                                <div className="flex flex-col justify-center items-start gap-2">
                                    <label className="text-2xl" htmlFor="location">Location of Event</label>
                                    <input className="w-full border-2 border-black px-4 py-2 rounded-full focus:border-[#4DC4A4]" type="text" name="location" id="location" placeholder="Where is the Event?"/>
                                </div>
                                <div className="flex flex-col justify-center items-start gap-2">
                                    <label className="text-2xl" htmlFor="description">Description</label>
                                    <input className="w-full border-2 border-black px-4 py-2 rounded-full focus:border-[#4DC4A4]" type="textbox" name="description" id="description" placeholder="Describe your event"/>
                                </div>
                                <div className="flex flex-col justify-center items-start gap-2">
                                    <label className="text-2xl" htmlFor="ticketCost">Cost of Tickets</label>
                                    <input className="w-full border-2 border-black px-4 py-2 rounded-full focus:border-[#4DC4A4]" type="number" name="ticketCost" id="ticketCost" placeholder="What does a ticket cost?"/>
                                </div>
                                <div className="flex flex-col justify-center items-start gap-2">
                                    <label className="text-2xl" htmlFor="tickets">Number of Tickets</label>
                                    <input className="w-full border-2 border-black px-4 py-2 rounded-full focus:border-[#4DC4A4]" type="number" name="tickets" id="tickets" placeholder="How many tickets are available?"/>
                                </div>
                                <div className="flex flex-col gap-2 w-full">
                                    <Link to="/organiser"><Button text="Create Event" size="text-xl"/></Link>
                                </div>
                            </form>
                        </div>
                    </div>
            </section>
            <section>
                <Footer/>
            </section>
        </div>
    );
}

export default AddEvent;