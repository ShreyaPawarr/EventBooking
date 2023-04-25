import Button from './Components/Button';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import { Link } from "react-router-dom";

const Root = () => {

    return (
        <div className='h-screen'>
            <Nav />
            <section className="inter landing flex flex-row justify-between h-3/4 bg-no-repeat bg-center bg-cover text-white ">
                <div className="flex flex-col w-1/2 items-start justify-center gap-4 pl-10 bg-gradient-to-r from-black">
                        <h1 className="text-6xl font-bold">Organise your events with ease</h1>
                        <h2 className="text-xl">Evnt is a platform that helps you organise and experience events with ease</h2>
                        <div className="flex flex-row w-full gap-2">
                            <Link to="events">
                                <Button text="Book Events" type="ok" size="text-xl"/>
                            </Link>
                            <Link to="login">
                                <Button text="Organise Events" type="outline"  size="text-xl" color='white'/>
                            </Link>
                        </div>
                </div>
            </section>  
            <section id='footer'>
                <Footer /> 
            </section>
        </div>
    )
}

export default Root;