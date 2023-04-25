import Nav from "./Components/Nav";
import Button from "./Components/Button";
import Footer from "./Components/Footer";
import {Link} from 'react-router-dom';
import { useState } from "react";

const LoginUser=() =>{

    const [userLogin, setUserLogin]= useState({
        email: "",
        password: ""
    });

    const inputHandler = (e) =>{
        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        });
    }

    return(
        <div>
            <Nav/>
            <section className="login p-20 flex justify-center bg-cover bg-center">
                <div className="form flex flex-col bg-slate-200 gap-8 p-10 rounded-xl w-1/2">
                    <div className="flex flex-col gap-1 justify-center items-center">
                        <h1 className="text-5xl font-bold roboto">Login to your Account</h1>
                        <h3 className="text-xl">Exciting events await you!</h3>
                    </div>
                    <form className="flex flex-col gap-6">                     
                        <div className="flex flex-col justify-center items-start gap-2">
                            <label className="text-2xl" htmlFor="email">Email</label>
                            <input onChange={inputHandler} className="w-full border-2 border-black px-4 py-2 rounded-full focus:border-[#4DC4A4]" type="email" name="email" id="email" placeholder="Enter your email"/>
                        </div>
                        <div className="flex flex-col justify-center items-start gap-2">
                            <label className="text-2xl" htmlFor="password">Password</label>
                            <input onChange={inputHandler} className="w-full border-2 border-black px-4 py-2 rounded-full focus:border-[#4DC4A4]" type="password" name="password" id="password" placeholder="Enter your password"/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <Button text="Create Account" size="text-xl" />
                            <h3 className="self-center">Don't have an account? <Link to="/signupUser"><span className="text-[#4DC4A4]">Sign Up Here</span></Link></h3>
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

export default LoginUser;