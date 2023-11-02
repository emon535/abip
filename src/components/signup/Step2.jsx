/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Input1 } from "../Input";
function Step2({setStepCount}){
    const [input, setInput] = useState({presentAddress:"", permanentAddress:"", nid:"", linkedInUrl:"", facebookUrl:"", birthday:"", businessName:"", positionInBusiness:"", businessEmail:"", businessPhone:"", businessUrl:"", lastEducationalQualification:""} );
    
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
        if(input.presentAddress!="" && input.permanentAddress !="" && input.nid !="" && input.facebookUrl !="" && input.birthday !="" && input.businessName !="" && input.positionInBusiness !="" && input.businessEmail !="" && input.businessPhone !=""){
            const data = JSON.parse(localStorage.getItem("signUp"));
            console.log(data)
            if(data == null){
                localStorage.setItem("signUp", JSON.stringify({presentAddress:input.presentAddress, permanentAddress:input.permanentAddress, nid:input.nid, linkedInUrl:input.linkedInUrl, facebookUrl:input.facebookUrl, birthday:input.birthday, businessName:input.businessName, positionInBusiness:input.positionInBusiness, businessEmail: input.businessEmail, businessPhone:input.businessPhone, businessUrl:input.businessUrl,lastEducationalQualification:input.lastEducationalQualification }));
                setStepCount(3)
            }else{
                localStorage.setItem("signUp", JSON.stringify({...data, presentAddress:input.presentAddress, permanentAddress:input.permanentAddress, nid:input.nid, linkedInUrl:input.linkedInUrl, facebookUrl:input.facebookUrl,  birthday:input.birthday, businessName:input.businessName, positionInBusiness:input.positionInBusiness, businessEmail: input.businessEmail, businessPhone:input.businessPhone, businessUrl:input.businessUrl,lastEducationalQualification:input.lastEducationalQualification}))
                setStepCount(3)
            }
        }else{
            setAlert(true)
        }
    }

      
    return(
        <div className=" ">
            <div className=" w-full flex gap-4 mt-10">
                <div className=" w-full">
                    <Input1 onChange={set} type="text" name="presentAddress" placeholder="Enter present address:" value={input.presentAddress} label="Present address *" />
                    <Input1 onChange={set} type="text" name="facebookUrl" placeholder="Enter facebook url:" value={input.facebookUrl} label=" Facebook URL *" />
                    <Input1 onChange={set} type="text" name="linkedInUrl" placeholder="Enter linked in url:" value={input.linkedInUrl} label="linked In URL " />
                    <Input1 onChange={set} type="text" name="businessName" placeholder="Enter business name:" value={input.businessName} label="Business Name *" />
                    <Input1 onChange={set} type="number" name="businessPhone" placeholder="Enter business phone:" value={input.businessPhone} label="Business Phone *" />


                </div>
                <div className=" w-full">
                    <Input1 onChange={set} type="text" name="permanentAddress" placeholder="Enter permanent Address:" value={input.permanentAddress} label="Permanent Address *" />
                    <Input1 onChange={set} type="number" name="nid" placeholder="Enter nid number:" value={input.nid} label="NID number *" />
                    <Input1 onChange={set} type="date" name="birthday" value={input.birthday} label="Date of Birth *" />
                    <Input1 onChange={set} type="text" name="businessEmail" placeholder="Enter business email:" value={input.businessEmail} label="Business Email *" />
                    <Input1 onChange={set} type="text" name="businessUrl" placeholder="Enter Business URL:" value={input.businessUrl} label="Business URL" />
                    <Input1 onChange={set} type="text" name="lastEducationalQualification" placeholder="Enter last educational qualification:" value={input.lastEducationalQualification} label="Last Educational Qualification" />
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