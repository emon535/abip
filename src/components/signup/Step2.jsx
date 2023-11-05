/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Input1 } from "../Input";
import 'react-phone-number-input/style.css'
import '../../assets/css/custom.css'
import PhoneInput from 'react-phone-number-input'

function Step2({setStepCount}){
    const [input, setInput] = useState({linkedInUrl:"", facebookUrl:"", businessName:"", positionInBusiness:"", businessEmail:"", businessUrl:"", lastEducationalQualification:""} );
    const [phone, setPhone] = useState();
    const [alert, setAlert] = useState(false);



    function set(e){
        setInput({...input, [e.target.name]:e.target.value});
    }

    
    useEffect(()=>{
        const data = JSON.parse(localStorage.getItem("signUp"));
        if(data != null){
            setInput({...input, ...data});
            setPhone(data.businessPhone)
        }
    }, [])
    


    function next(){
 
        const data = JSON.parse(localStorage.getItem("signUp"));
        console.log(data)
        if(data == null){
            localStorage.setItem("signUp", JSON.stringify({linkedInUrl:input.linkedInUrl, facebookUrl:input.facebookUrl, businessName:input.businessName, positionInBusiness:input.positionInBusiness, businessEmail: input.businessEmail, businessPhone:phone, businessUrl:input.businessUrl,lastEducationalQualification:input.lastEducationalQualification }));
            setStepCount(3)
        }else{
            localStorage.setItem("signUp", JSON.stringify({...data, linkedInUrl:input.linkedInUrl, facebookUrl:input.facebookUrl,  businessName:input.businessName, positionInBusiness:input.positionInBusiness, businessEmail: input.businessEmail, businessPhone:phone, businessUrl:input.businessUrl,lastEducationalQualification:input.lastEducationalQualification}))
            setStepCount(3)
        }
    
    }

      
    return(
        <div className=" ">
            <div className=" w-full flex gap-4 mt-10">
                <div className=" w-full">
                    <Input1 onChange={set} type="text" name="facebookUrl" placeholder="Enter facebook url:" value={input.facebookUrl} label=" Facebook url" />
                    <Input1 onChange={set} type="text" name="linkedInUrl" placeholder="Enter linkedin url:" value={input.linkedInUrl} label="Linkedin url " />
                    <Input1 onChange={set} type="text" name="businessName" placeholder="Enter business name:" value={input.businessName} label="Business name" />
                    <div className=" w-full pt-2">
                        <label htmlFor="">Business phone number *</label>
                        <PhoneInput className="w-full outline-none rounded-md border-2 focus:border-2 focus:border-cyan-900 pl-2 py-2 text-gray-600 required:border-red-500" placeholder="Enter business phone:" value={phone} onChange={setPhone} />

                    </div>       
                    <Input1 onChange={set} type="text" name="businessEmail" placeholder="Enter business email:" value={input.businessEmail} label="Business email" />
                    <Input1 onChange={set} type="text" name="businessUrl" placeholder="Enter Business url:" value={input.businessUrl} label="Business url" />
                    <Input1 onChange={set} type="text" name="lastEducationalQualification" placeholder="Enter last educational qualification:" value={input.lastEducationalQualification} label="Last educational qualification" />
                </div>
            </div>
            <div className=" w-full absolute bottom-8 -ml-10 flex flex-row-reverse gap-4 ">
                <button onClick={next} className=" py-2 px-4 rounded-md bg-sky-700 text-slate-200">Next</button>
                <button onClick={()=>setStepCount(1)}  className=" py-2 px-4 rounded-md bg-amber-600 text-slate-200">Previous</button>
            </div>
            {
                alert?<h1 className=" py-4 text-red-600">All * fields are required!</h1>:<></>
            }
        </div>
    )
}

export default Step2;