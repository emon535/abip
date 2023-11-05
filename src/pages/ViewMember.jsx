import { useEffect, useState } from "react";
import AdminNav from "../components/AdminNav";
import AdminSideBar from "../components/AdminSideBar";
import API from "../Api/api";
import baseUrl, { memberUrl } from "../url";
import { useParams } from "react-router-dom";



function ViewMember(){
    const [member, setMember] = useState({});
    const { id } = useParams();

    

    useEffect(()=>{
        API.get(`${memberUrl}/${id}`).then((data)=>{
            setMember(data.data);
        })
    }, [id])


    return(
        <div>
            <AdminNav/>
            <div className=" flex">
                <AdminSideBar/>
                <div className=" w-full h-screen flex justify-center">
                    <div className=" w-[600px] h-[800px] mt-6 rounded-md bg-slate-200 flex flex-col">
                        <div className=" flex items-center justify-center mt-4">
                            <img className=" w-[200px] h-[200px] rounded-md " src={`${baseUrl}/public/upload/${member.photo}`} alt="" />
                        </div>
                        <div className=" p-6 pl-10">
                            <div>
                                <span className=" font-bold">Name: </span>
                                <span>{member.name}</span>
                            </div>
                            <div>
                                <span className=" font-bold">email: </span>
                                <span>{member.email}</span>
                            </div>
                            <div>
                                <span className=" font-bold">Name: </span>
                                <span>{member.name}</span>
                            </div>
                            <div>
                                <span className=" font-bold">phone: </span>
                                <span>{member.phone}</span>
                            </div>
                            <div>
                                <span className=" font-bold">Birthday: </span>
                                <span>{new Date(member.birthday).toLocaleDateString()}</span>
                            </div>
                            <div>
                                <span className=" font-bold">Father Name: </span>
                                <span>{member.fatherName}</span>
                            </div>
                            <div>
                                <span className=" font-bold">Present Address: </span>
                                <span>{member.presentAddress}</span>
                            </div>
                            <div>
                                <span className=" font-bold">Permanent Address: </span>
                                <span>{member.permanentAddress}</span>
                            </div>
                 
                            <div>
                                <span className=" font-bold">Business Name: </span>
                                <span>{member.businessName}</span>
                            </div>
                            <div>
                                <span className=" font-bold">Business Email: </span>
                                <span>{member.businessEmail}</span>
                            </div>
                            <div>
                                <span className=" font-bold">Business Phone: </span>
                                <span>{member.businessPhone}</span>
                            </div>
                            <div>
                                <span className=" font-bold">Business URL: </span>
                                <span>{member.businessUrl}</span>
                            </div>
                            <div>
                                <span className=" font-bold">Last Educational Qualification: </span>
                                <span>{member.lastEducationalQualification}</span>
                            </div>
                            <div>
                                <span className=" font-bold">Facebook URL: </span>
                                <a className=" underline text-orange-500" href={`${member.facebookUrl}`} target="_blank" rel="noopener noreferrer">{member.facebookUrl}</a>
                                
                            </div>
                            <div>
                                <span className=" font-bold">Linkedin URL: </span>
                                <a className=" underline text-orange-500" href={`${member.linkedInUrl}`} target="_blank" rel="noopener noreferrer">{member.linkedInUrl}</a>
                                
                            </div>
                            <div>
                                <span className=" font-bold">CV: </span>
                                <a className=" underline text-orange-500" href={`${baseUrl}/public/upload/${member.cv}`} target="_blank" rel="noopener noreferrer">View/Download</a>
                                
                            </div>
                            <div>
                                <span className=" font-bold">Reference By: </span>
                                <span>{member.referenceBy}</span>
                            </div>


                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ViewMember;