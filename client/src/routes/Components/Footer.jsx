const Footer=() =>{
    return(
        <div className="footer flex flex-row justify-between roboto w-full p-10 bg-slate-600 text-white">
            <div className="flex flex-col gap-2 w-1/2">
                <h1 className="text-4xl font-bold">Evnt</h1>
                <p>Evnt is a platform that helps you organise and experience events with ease</p>
                <p>© 2023 - 2024</p>
            </div>
            <div className="w-1/2 flex flex-col gap-2">
                <h2 className="text-3xl font-semibold">Team</h2>
                <div className="flex flex-row gap-4">
                    <div className="flex flex-col gap-1">
                        <h2 className="text-lg font-medium">Nikhil Bakshi</h2>
                        <p>(102003046)</p>
                        <p>Frontend Developer</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h2 className="text-lg font-medium">Arshdeep Singh</h2>
                        <p>(102003060)</p>
                        <p>Backend Developer</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h2 className="text-lg font-medium">Kunal Dureja</h2>
                        <p>(102003061)</p>
                        <p>Backend Developer</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h2 className="text-lg font-medium">Shreya Pawar</h2>
                        <p>(102003108)</p>
                        <p>UI Designer</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;