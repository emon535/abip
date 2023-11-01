/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Input1 } from "../Input";
function Step1({setStepCount}){
    const [input, setInput] = useState({name:"", email:"", phone:"", password:"", rPassword:""} );
    const [alert, setAlert] = useState(false);

    function set(e){
        setInput({...input, [e.target.name]:e.target.value});
    }


    useEffect(()=>{
        const data = JSON.parse(localStorage.getItem("signUp"));
        if(data != null){
            setInput({...input, ...data})
        }
    }, [])
    



    function next(){
        if(input.name!="" && input.email !="" && input.phone !="" && input.password !="" && input.rPassword !=""  && ( input.password === input.rPassword)){
            const data = JSON.parse(localStorage.getItem("signUp"));
            console.log(data)
            if(data == null){
                localStorage.setItem("signUp", JSON.stringify({name:input.name, email:input.email, phone:input.phone, password:input.password, rPassword:input.rPassword,}))
                setStepCount(2)
            }else{
                localStorage.setItem("signUp", JSON.stringify({...data, name:input.name, email:input.email, phone:input.phone, password:input.password, rPassword:input.rPassword,}))
                setStepCount(2)
            }
        }else{
            setAlert(true)
        }
    }

      
    return(
        <div className=" ">
            <div className=" w-full flex gap-4 mt-10">
                
                <div className=" w-full">
                    <Input1 onChange={set} type="text" name="name" placeholder="Enter name:" value={input.name} label="Name *" />
                    <Input1 onChange={set} type="password" name="password" placeholder="Enter password:" value={input.password} label="Password *" />
                    <Input1 onChange={set} type="password" name="rPassword" placeholder="Enter confirm password:" value={input.rPassword} label="Confirm password *" />
                </div>
                <div className=" w-full">
                    <Input1 onChange={set} type="email" name="email" placeholder="Enter email:" value={input.email} label="Email *" />
                    <Input1 onChange={set} type="number" name="phone" placeholder="Enter email:" value={input.phone} label="Phone number *" />
                </div>
            </div>
            <div className=" w-full absolute bottom-8 -ml-10 flex flex-row-reverse">
                <button onClick={next} className=" py-2 px-4 rounded-md bg-sky-700 text-slate-200">Next</button>
            </div>
            {
                alert?<h1 className=" py-4 text-red-600">All * fields are required!</h1>:<></>
            }
        </div>
    )
}

export default Step1;