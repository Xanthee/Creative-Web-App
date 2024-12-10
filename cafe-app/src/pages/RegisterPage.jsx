import { Link } from "react-router-dom"
import axios from "axios";
import { useState } from "react";

function RegisterPage() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    
    function registerUser(e) {
        console.log(username)
        e.preventDefault();
        axios.post('http://127.0.0.1:5000/register', {
            username: username,
            email: email,
            password: password,
        })
            .then(result => console.log("res",result))
            .catch(err => console.log("error",err));
    }





    return (
        <div className="m-12">
            <div className="flex flex-col">
                <span className="font-bold text-2xl pb-4">Register</span>
                <span className="text-sm text-slate-500 pb-4">Required fields are marked with an asterisk*</span>
            </div>
            <form className="flex flex-col " onSubmit={registerUser}>

                <input
                    type="name"
                    placeholder="*Enter your name"
                    className="mb-6"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />

                <input
                    type="email"
                    placeholder="*Enter your email"
                    className="mb-6"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="*Enter password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />

                <button className=" w-24 font-bold text-l m-2 mt-10 p-3 bg-black text-white border border-black rounded-full">Sign up</button>
                <div className="">
                    Already a member? <Link to={'/login'} className="font-bold underline">login</Link>
                </div>
            </form>
        </div>
    );
}


export default RegisterPage;
