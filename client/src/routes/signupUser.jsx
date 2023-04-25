import {Link} from 'react-router-dom';
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import Button from "./Components/Button";
import { useState } from 'react';

const SignupUser=() =>{

    const [userSignUp, setUserSignUp]= useState({
        name: "",
        email: "",
        password: ""
    });

    const inputHandler = (e) =>{
        setUserSignUp({
            ...userSignUp,
            [e.target.name]: e.target.value
        });
    }

    return(
        <div>
            <Nav/>
            <section className="signup p-10 flex justify-center bg-cover bg-center">
                <div className="form flex flex-col bg-slate-200 gap-8 p-10 rounded-xl w-1/2">
                    <div className="flex flex-col gap-1 justify-center items-center">
                        <h1 className="text-5xl font-bold roboto">Create an Account</h1>
                        <h3 className="text-xl">Let's get started</h3>
                    </div>
                    <form className="flex flex-col gap-6">
                    <   div className="flex flex-col justify-center items-start gap-2">
                            <label className="text-2xl" htmlFor="email">Name</label>
                            <input onChange={inputHandler} className="w-full border-2 border-black px-4 py-2 rounded-full focus:border-[#4DC4A4]" type="name" name="name" id="name" placeholder="Enter your full name"/>
                        </div>                        
                        <div className="flex flex-col justify-center items-start gap-2">
                            <label className="text-2xl" htmlFor="email">Email</label>
                            <input onChange={inputHandler} className="w-full border-2 border-black px-4 py-2 rounded-full focus:border-[#4DC4A4]" type="email" name="email" id="email" placeholder="Enter your email"/>
                        </div>
                        <div className="flex flex-col justify-center items-start gap-2">
                            <label className="text-2xl" htmlFor="password">Password</label>
                            <input onChange={inputHandler} className="w-full border-2 border-black px-4 py-2 rounded-full focus:border-[#4DC4A4]" type="password" name="password" id="password" placeholder="Enter your password"/>
                        </div>
                        <div className="flex flex-col justify-center items-start gap-2">
                            <label className="text-2xl" htmlFor="password">Confirm Password</label>
                            <input onChange={inputHandler} className="w-full border-2 border-black px-4 py-2 rounded-full focus:border-[#4DC4A4]" type="password" name="password" id="password" placeholder="Enter your password"/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <Button text="Create Account" size="text-xl" />
                            <h3 className="self-center">Already have an account? <Link to="/loginUser"><span className="text-[#4DC4A4]">Login Here</span></Link></h3>
                         </div>
                    </form>
                </div>
            </section>
            <section id='footer'>
                <Footer />
            </section>
        </div>
    );
}

export default SignupUser;