import Button from './Components/Button';
import Nav from './Components/Nav';
import { Link } from "react-router-dom";

const Root = () => {

    return (
        <>
            <Nav />
            <section className="inter flex flex-row pl-10 justify-between">
                <div className="flex flex-col w-1/2 items-start justify-center gap-4">
                        <h1 className="text-6xl font-bold">Organise your events with ease</h1>
                        <h2 className="text-xl">Evnt is a platform that helps you organise and experience events with ease</h2>
                        <div className="flex flex-row w-full gap-2">
                            <Link to="events">
                                <Button text="Book Events" type="ok" width="w-1/2" size="text-xl"/>
                            </Link>
                            <Link to="login">
                                <Button text="Organise Events" type="outline" width="w-1/2" size="text-xl"/>
                            </Link>
                        </div>
                </div>
                <div className="flex w-1/2 justify-end">
                    <img className="h-screen" src="https://images.unsplash.com/photo-1597298184931-bf2a546401a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80" alt="Landing" />
                </div>
            </section>        
        </>
    )
}

export default Root;