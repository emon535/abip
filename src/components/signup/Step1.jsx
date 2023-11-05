/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Input1 } from "../Input";
import 'react-phone-number-input/style.css'
import '../../assets/css/custom.css'
import PhoneInput from 'react-phone-number-input'
function Step1({setStepCount}){
    const [input, setInput] = useState({name:"", email:"", birthday:"", password:"", rPassword:""} );
    const [alert, setAlert] = useState(false);
    const [phone, setPhone] = useState();
    const [sugg, setSugg] = useState([]);
    const [address, setAddress] = useState("");

    function set(e){
        setInput({...input, [e.target.name]:e.target.value});
    }


    useEffect(()=>{
        const data = JSON.parse(localStorage.getItem("signUp"));
        if(data != null){
            setInput({...input, ...data});
            setPhone(data.phone);
            setAddress(data.address);
        }
    }, [])
    

    function getFile(e){
        setFile(e.target.files[0]);
    }

    function getSugg(text){

        setAddress(text)

        fetch(`https://api.getAddress.io/autocomplete/${text}?api-key=3Ihph0lYAU6P1llsphU68Q5211`).then((data)=>data.json()).then((data)=>{
            setSugg([])
            setSugg(data.suggestions);
        })
    }


    function next(){
        if(input.name!="" && input.email !="" && input.email !=""  && phone !="" && address !="" && input.password !="" && input.rPassword !=""  && ( input.password === input.rPassword)){
            const data = JSON.parse(localStorage.getItem("signUp"));
            console.log(data)
            if(data == null){
                localStorage.setItem("signUp", JSON.stringify({name:input.name, email:input.email, birthday:input.birthday,  phone:phone, address:address, password:input.password, rPassword:input.rPassword,}))
                setStepCount(2)
            }else{
                localStorage.setItem("signUp", JSON.stringify({...data, name:input.name, email:input.email, birthday:input.birthday, phone:phone, address:address, password:input.password, rPassword:input.rPassword,}))
                setStepCount(2)
            }
        }else{
            setAlert(true)
        }
    }

      
    return(
        <div className="">
            <div className=" w-full flex gap-4 mt-10">
                
                <div className=" w-full">
                    <Input1 onChange={set} type="text" name="name" placeholder="Enter name:" value={input.name} label="Name *" />
                    <Input1 onChange={set} type="email" name="email" placeholder="Enter email:" value={input.email} label="Email *" />
                    <div className=" w-full pt-2">
                        <label htmlFor="">Phone number *</label>
                        <PhoneInput className="w-full outline-none rounded-md border-2 focus:border-2 focus:border-cyan-900 pl-2 py-2 text-gray-600 required:border-red-500" placeholder="Enter phone number" value={phone} onChange={setPhone} />

                    </div>
                    <Input1 onChange={(e)=>getSugg(e.target.value)} type="text" name="address" placeholder="Enter address:" value={address} label="Address *" />
                    {
                        (sugg.length > 0)?
                        <div className=" w-auto h-auto p-4 bg-slate-400 absolute">
                            {
                                sugg.map((data)=>{
                                    return(
                                        <div key={data.id} onClick={()=>{setAddress(data.address); setSugg([]); }} className=" text-white border m-1 p-1 cursor-pointer">{data.address}</div>
                                    )
                                })
                            }
                        </div>:<></>
                    }
                    <Input1 onChange={set} type="date" name="birthday" value={input.birthday} label="Date of birth *" />
                    <Input1 onChange={set} type="password" name="password" placeholder="Enter password:" value={input.password} label="Password *" />
                    <Input1 onChange={set} type="password" name="rPassword" placeholder="Enter confirm password:" value={input.rPassword} label="Confirm password *" />
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