/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Input1, Select, Option } from "../Input";
import { useNavigate } from "react-router-dom";
function Step3({setStepCount}){
    const [input, setInput] = useState({maritalStatus:"", fatherName:"", referenceBy:""} );
    const [file, setFile] = useState({photo:{}, nid:{}, tradeLicense:{}, cv:{}} );
    const navigate = useNavigate();

    function set(e){
        setInput({...input, [e.target.name]:e.target.value});
    }

    function getFile(e){
        setInput({...file, [e.target.name]:e.target.files[0]});
    }


    useEffect(()=>{
        const data = JSON.parse(localStorage.getItem("signUp"));
        if(data != null){
            setInput({...input, ...data})
        }
    }, [])
    



    function next(){
        if(input.name!="" && input.maritalStatus !=""  && input.fatherName !=""){
            const data = JSON.parse(localStorage.getItem("signUp"));
            console.log(data)
            if(data == null){
                localStorage.setItem("signUp", JSON.stringify({ maritalStatus:input.maritalStatus, fatherName:input.fatherName, referenceBy:input.referenceBy}))
                setStepCount(1)
            }else{
                localStorage.setItem("signUp", JSON.stringify({...data, maritalStatus:input.maritalStatus, fatherName:input.fatherName, referenceBy:input.referenceBy}))
                
                navigate("/memberLogIn")
            }
        }
    }

      
    return(
        <div className=" ">
            <div className=" w-full flex gap-4 mt-10">
                <div className=" w-full">
      
                    <Input1 onChange={set} type="text" name="fatherName" placeholder="Enter father's Name:" value={input.fatherName} label="Father's Name *" />
                    <Input1 onChange={getFile} type="file" name="photo" label="Applicant's Photo *" />
                    <Input1 onChange={getFile} type="file" name="tradeLicense" label="Trade License *" />
                    <Input1 onChange={set} type="text" name="referenceBy" placeholder="Enter reference by:" value={input.referenceBy} label="Reference By *" />
                </div>
                <div className=" w-full">
                <Select onChange={set} name="maritalStatus" value={input.maritalStatus} label="Marital Status *" >
                    <Option value="">Marital Status</Option>
                    <Option value="Married">Married</Option>
                    <Option value="Unmarried">Unmarried</Option>
                </Select>
                <Input1 onChange={getFile} type="file" name="nid"  label="NID *" />
                <Input1 onChange={getFile} type="file" name="cv"  label="CV *" />
                </div>
            </div>
            <div className=" w-full absolute bottom-8 -ml-10 flex flex-row-reverse gap-4">
                <button onClick={next} className=" py-2 px-4 rounded-md bg-sky-700 text-slate-200">Submit</button>
                <button onClick={()=>setStepCount(2)}  className=" py-2 px-4 rounded-md bg-amber-600 text-slate-200">Previous</button>
            </div>

        </div>
    )
}

export default Step3;