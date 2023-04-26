import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import Button from "./Components/Button";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { useState } from "react";

const SignUp=() =>{

    const router = useNavigate();

    const [manager,setManager] = useState({
        organisation:"",
        email:"",
        password:""
    })

    const handleInput = (e) => {
        setManager((prev) => {
            return {...prev,[e.target.name]:e.target.value};
        })
    }

    const client = axios.create({
        baseURL: "http://localhost:3000/"
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        client.post("manager",
        manager
        )
        .then((result) => {
            console.log(result);
            // router('/organiser');
        }).catch(err => {
            console.log(err);
        })
    }
    return(
        <div>
            <Nav/>
            <div className="signup flex flex-col w-full p-10 items-center bg-no-repeat bg-center bg-cover">
                <div className="form flex flex-col bg-slate-200 gap-8 p-10 rounded-xl">
                    <div className="flex flex-col gap-1 justify-center items-center">
                        <h1 className="text-5xl font-bold roboto">Create an Account</h1>
                        <h3 className="text-xl">Let&apos;s get started</h3>
                    </div>
                    <form className="flex flex-col gap-6">
                        <div className="flex flex-col justify-center items-start gap-2">
                            <label className="text-2xl" htmlFor="email">Organisation</label>
                            <input className="w-full border-2 border-black px-4 py-2 rounded-full focus:border-[#4DC4A4]" type="name" name="organisation" id="name" value={manager.organisation} placeholder="Enter your org name" onChange={handleInput}/>
                        </div>
                        <div className="flex flex-col justify-center items-start gap-2">
                            <label className="text-2xl" htmlFor="email">Email</label>
                            <input className="w-full border-2 border-black px-4 py-2 rounded-full focus:border-[#4DC4A4]" type="email" name="email" id="email" value={manager.email} placeholder="Enter your email" onChange={handleInput}/>
                        </div>
                        <div className="flex flex-col justify-center items-start gap-2">
                            <label className="text-2xl" htmlFor="password">Password</label>
                            <input className="w-full border-2 border-black px-4 py-2 rounded-full focus:border-[#4DC4A4]" type="password" name="password" id="password" value={manager.password} placeholder="Enter your password" onChange={handleInput}/>
                        </div>
                        <div className="flex flex-col justify-center items-start gap-2">
                            <label className="text-2xl" htmlFor="password">Confirm Password</label>
                            <input className="w-full border-2 border-black px-4 py-2 rounded-full focus:border-[#4DC4A4]" type="password" name="password" id="password" placeholder="Enter your password"/>
                        </div>
                        <div className="flex flex-col gap-2">
                                <Button text="Create Account" size="text-xl" onClick={handleSubmit}/>
                                <h3 className="self-center">Already have an account? <Link to="/login"><span className="text-[#4DC4A4]">Login Here</span></Link></h3>
                            </div>
                    </form>
                </div>
            </div>
            <section id='footer'>
                <Footer /> 
            </section>
        </div>
    );
}

export default SignUp;