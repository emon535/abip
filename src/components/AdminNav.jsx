import { Link, useNavigate } from "react-router-dom";
import { FaPowerOff } from "react-icons/fa6";
import API from "../Api/api";
import { adminUrl } from "../url";
import useAuth from "../hooks/useAuth";
function MemberNav(){
    const { id } = useAuth()
    const navigate = useNavigate()

    function logOut(){
        API.delete(`${adminUrl}/logout/${id}`)
        localStorage.removeItem("user");
        navigate("/")
    }


    return(
        <nav className=" w-full h-[70px] sticky top-0 z-20 flex items-center justify-between  bg-slate-300 px-10">
            <div  className=" w-[200px] h-full flex items-center justify-center">
                <Link to="/"><span className=" text-3xl uppercase">LOGO Here</span></Link> 
            </div>
            <div className=" w-[600px] h-full flex items-center gap-4 ">
                {/* <NavLink to="/" className={({isActive})=>` uppercase ${isActive? 'text-orange-600':'text-slate-800'} `}>Home</NavLink>
                <NavLink to="/about" className={({isActive})=>` uppercase ${isActive? 'text-orange-600':'text-slate-800'} `}>About Us</NavLink>
                <NavLink to="/contact" className={({isActive})=>` uppercase ${isActive? 'text-orange-600':'text-slate-800'} `}>Contact Us</NavLink> */}
            </div>
            <div className=" w-[110px] shrink-0">
                    <button onClick={logOut} className=" py-2 px-2 rounded-md flex items-center justify-center bg-red-600 text-slate-200"> 
                        <FaPowerOff className=" text-2xl mr-1"/> 
                        <span> Log Out</span>
                    </button>
            </div>
        </nav>
    )
}

export default MemberNav;