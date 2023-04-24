import Button from './Components/Button';
import Nav from './Components/Nav';

const Root = () => {
    return (
        <>
            <Nav />
            <div className="inter flex flex-row pl-10 justify-between">
                <div className="flex flex-col w-1/2 items-center justify-center">
                    <div className="flex flex-col gap-3">
                        <h1 className="text-6xl font-bold">Organise your events with ease</h1>
                        <h2 className="text-xl">Evnt is a platform that helps you organise your events with ease</h2>
                        <div className="flex flex-row w-full gap-2">
                            <Button text="Book Events" type="ok" width="w-1/2"/>
                            <Button text="Organise Events" type="outline" width="w-1/2"/>
                        </div>
                    </div>
                </div>
                <div className="flex w-1/2 justify-end">
                    <img className="h-screen" src="https://images.unsplash.com/photo-1597298184931-bf2a546401a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80" alt="Landing" />
                </div>
            </div>        
        </>
    )
}

export default Root;