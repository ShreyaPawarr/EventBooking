import Button from "./Button";

const Nav= () =>{
    return (
        <div className="roboto flex flex-row justify-between px-10 py-4 bg-slate-200">
            <h1 className="text-3xl">Evnt</h1>
            <div className="flex flex-row gap-4 items-center h-full">
                <a className="hover:cursor-pointer"><h2 className="text-md hover:decoration-solid hover:decoration-2">Team</h2></a>
                <a className="hover: cursor-pointer"><h2 className="text-md">Organise</h2></a>
                <Button text="Login" type="outline"/>
            </div>
        </div>
    )
}

export default Nav;   