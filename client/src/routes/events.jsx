import Button from "./Components/Button";
import Nav from "./Components/Nav";
import {Link} from 'react-router-dom';

const Events= ()=>{

    return(
        <div>
            <Nav/>
            <section className="hero p-10 pt-20 bg-gradient-to-r from-violet-500 to-fuchsia-500">
                <div className="w-1/3 flex flex-col gap-4 text-white">
                    <h1 className="text-5xl ">Book tickets from anywhere you want!</h1>
                    <h2 className="text-xl">We are here to help you find and experience events in the most interactive and fun way.</h2>
                    <Link to="/signupUser"><Button text="Sign Up for Offers" size="text-xl" rounded="rounded-md"/></Link>
                </div>
            </section>
            <section className="events p-10 flex flex-col gap-8">
                <div className="flex w-full items-end justify-between">
                    <h1 className="text-4xl font-semibold">Popular Events</h1>
                    <h3 className="text-md text-[#4DC4A4]">See All</h3>
                </div>
                <div className="grid grid-cols-4 gap-8 ">
                    <div className="p-5 bg-slate-400 rounded-md">
                        hello there
                    </div>
                    <div className="p-5 bg-slate-400">
                        hello there
                    </div>
                    <div className="p-5 bg-slate-400">
                        hello there
                    </div>
                    <div className="p-5 bg-slate-400">
                        hello there
                    </div>
                </div>
            </section>
            <section className="events p-10 flex flex-col gap-8">
                <div className="flex w-full items-end justify-between">
                    <h1 className="text-4xl font-semibold">Best of Live Events</h1>
                    <h3 className="text-md text-[#4DC4A4]">See All</h3>
                </div>
                <div className="grid grid-cols-4 gap-8 text-white">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-20 pt-5 pl-5 rounded-lg">
                        <h2 className="text-2xl font-medium">Workshops & More</h2>
                    </div>
                    <div className="bg-gradient-to-r from-orange-300 to-red-500 p-20 pt-5 pl-5 rounded-lg">
                        <h2 className="text-2xl font-medium">Kids Zone</h2>
                    </div>
                    <div className="bg-gradient-to-r from-yellow-300 to-green-500 p-20 pt-5 pl-5 rounded-lg">
                        <h2 className="text-2xl font-medium">Comedy Shows</h2>
                    </div>
                    <div className="bg-gradient-to-r from-pink-300 to-purple-500 p-20 pt-5 pl-5 rounded-lg">
                        <h2 className="text-2xl font-medium">Music Shows</h2>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Events;