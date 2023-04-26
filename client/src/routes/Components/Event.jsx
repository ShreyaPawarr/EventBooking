import Button from "./Button";

const Event=(props) =>{

    return(
        <div className="flex flex-row w-full p-5 bg-slate-100 rounded-lg gap-8">
            <div className="w-1/5 h-full">
                <img className="rounded-md" src="https://images.unsplash.com/photo-1558008258-3256797b43f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2831&q=80" />
            </div>
            <div className="flex flex-col w-full gap-4">
                <div className="flex flex-col">
                    <h1 className="text-3xl font-medium">{props.name}</h1>
                    <h2 className="text-xl">{props.des}</h2>
                </div>
                <div className="flex justify-between items-end">
                    <div className="flex flex-col gap-1">
                        <div className="flex gap-4">
                            <div className="flex flex-col ">
                                <h3 className="text-lg font-medium">Date</h3>
                                <h3 className="text-lg">{props.time}</h3>
                            </div>
                        </div>
                        <h3 className="text-lg font-medium">{props.location}</h3>
                    </div>
                    <div className="flex gap-2">
                        <Button text="Modify" size="text-xl" type="outline"/>
                        <Button text="Delete" size="text-xl" type="outline"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Event;