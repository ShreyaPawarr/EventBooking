import Nav from "./Components/Nav";
import { Link } from "react-router-dom";
import Button from "./Components/Button";

const LoginOrg= ()=>{
    return(
        <div>
            <Nav />
            <section className="login flex flex-row px-10 py-24 bg-no-repeat bg-center bg-cover">
                <div className="flex flex-col justify-center items-center w-1/2">
                    <div className="form flex flex-col bg-slate-200 gap-8 p-10 rounded-xl">
                        <div className="flex flex-col gap-1 justify-center items-center">
                            <h1 className="text-5xl font-bold roboto">Welcome Back!</h1>
                            <h3 className="text-xl">The faster you fill up, the faster you get a ticket</h3>
                        </div>
                        <form className="flex flex-col gap-6">
                            <div className="flex flex-col justify-center items-start gap-2">
                                <label className="text-2xl" htmlFor="email">Email</label>
                                <input className="w-full border-2 border-black px-4 py-2 rounded-full focus:border-[#4DC4A4]" type="email" name="email" id="email" placeholder="Enter your email"/>
                            </div>
                            <div className="flex flex-col justify-center items-start gap-2">
                                <label className="text-2xl" htmlFor="password">Password</label>
                                <input className="w-full border-2 border-black px-4 py-2 rounded-full focus:border-[#4DC4A4]" type="password" name="password" id="password" placeholder="Enter your password"/>
                                <h3 className="text-[#4DC4A4]">Forgot Password?</h3>
                            </div>
                            <div className="flex flex-col gap-2">
                                <Button text="Login as Organiser" size="text-xl"/>
                                <h3 className="self-center">Don't have an account? <Link to="/signup"><span className="text-[#4DC4A4]">Click Here</span></Link></h3>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-start w-1/2 gap-4 text-white">
                    <h2 className="text-5xl font-medium">We can help you organize Events as Special as you want</h2>
                    <h3 className="text-2xl">We can guide you through the process, assisting from everything from budget to over all designs and solution and execution</h3>
                </div>
            </section>
        </div>
    );
}

export default LoginOrg;