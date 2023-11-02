import { Link, NavLink } from "react-router-dom";
import { FaUserPlus } from "react-icons/fa6";
import useAuth from "../hooks/useAuth";
import baseUrl from "../url";
function Nav(){
    const  { status, photo, role } = useAuth();

    return(
        <>
            {/* <div className=" w-full h-[40px] bg-slate-500">
            sdfssdff
            </div> */}
            <nav className=" w-full h-[70px] sticky top-0 z-20 flex items-center justify-between  bg-slate-200 px-20">
                <div  className=" w-[200px] h-full flex items-center justify-center">
                    <Link to="/"><span className=" text-3xl uppercase">LOGO Here</span></Link> 
                </div>
                <div className=" w-[600px] h-full flex items-center gap-4 font-bold">
                    <NavLink to="/" className={({isActive})=>` uppercase hover:text-orange-600 ${isActive? 'text-orange-600':'text-slate-800'} `}>Home</NavLink>
                    <NavLink to="/about" className={({isActive})=>` uppercase hover:text-orange-600 ${isActive? 'text-orange-600':'text-slate-800'} `}>About Us</NavLink>
                    <NavLink to="/contact" className={({isActive})=>` uppercase hover:text-orange-600 ${isActive? 'text-orange-600':'text-slate-800'} `}>Contact Us</NavLink>
                </div>
                <div className=" w-[250px] ">
                    {
                        (status == true)?
                        <>
                        {
                            (role == "Admin")?
                            <Link to="/adminDashboard">
                                <img className=" w-[50px] h-[50px] rounded-full" src={photo} alt="" />
                            </Link>:
                            <Link to="/dashboard">
                                <img className=" w-[50px] h-[50px] rounded-full" src={`${baseUrl}/public/upload/${photo}`} alt="" />
                            </Link>
                        }
                            
                        </>:
                        <div className=" flex">
                           <Link to="/memberLogIn" className=" shrink-0">
                                <button className=" py-2 px-2 rounded-l-md flex items-center justify-center bg-cyan-900  hover:bg-cyan-800 text-slate-200"> 
                                    <span> Member LogIn</span>
                                </button>
                            </Link>
                            <Link to="/memberSignUp"  className=" shrink-0">
                                <button className=" py-2 px-2 rounded-r-md flex items-center justify-center bg-cyan-900 hover:bg-cyan-800 text-slate-200 border-l-2 border-cyan-800"> 
                                    <span> Become a Member</span>
                                </button>
                            </Link>
                        </div>

                        
                    }

                </div>
            </nav>
        </>
    )
}

export default Nav;