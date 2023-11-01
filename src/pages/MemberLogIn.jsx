
import { useState } from "react";
import Nav from "../components/Nav";
import { Input1 } from "../components/Input";
import { Link, useNavigate } from "react-router-dom";
import API from '../Api/api'
import { memberUrl } from "../url";
import { toFormData } from "axios";

function MemberLogIn(){
    const [input, setInput] = useState({ email:"", password:""} );
    const navigate = useNavigate();

    function set(e){
        setInput({...input, [e.target.name]:e.target.value});
    }

    function logIn(){
        API.post(`${memberUrl}/logIn`, toFormData(input)).then((data)=>{
            if(data.status == true){
                localStorage.setItem("user", JSON.stringify({...data, message:""}))
                navigate("/dashboard")
            }
        })
    }

    return(
        <div>
            <Nav/>

            <div className=" w-[600px] h-auto pb-[50px] mb-20 mt-10 mx-auto p-4 rounded-sm bg-slate-200 relative">
                <h3 className=" py-2 text-xl text-center font-bold text-sky-900">Member LogIn</h3>
                <div>
                    <Input1 onChange={set} type="email" name="email" placeholder="Enter email:" value={input.email} label="Email *" />
                    <Input1 onChange={set} type="password" name="password" placeholder="Enter password:" value={input.password} label="Password *" />
                </div>
                <button onClick={logIn} className=" mt-4 py-2 w-full float-right rounded-md bg-sky-700 text-slate-200">Log In</button>
                <h4 className=" text-sky-900 mt-20">Don’t Have An Account? Please, <Link to="/memberSignUP" className=" text-yellow-600 underline"> Register</Link> Here</h4>
            </div>
        </div>
    )
}

export default MemberLogIn;