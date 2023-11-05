import { Link, NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import baseUrl from "../url";
import logo from '../../src/assets/images/logo.png';
function Nav(){
    const  { status, photo, role } = useAuth();

    return(
        <>
            {/* <div className=" w-full h-[40px] bg-slate-500">
            sdfssdff
            </div> */}
            <nav className=" w-full h-[70px] sticky top-0 z-20 flex items-center justify-between  bg-slate-200 px-20 shadow-md">
                <div  className=" w-[200px] h-full flex items-center justify-center">
                    <Link to="/"><img className=" w-[80px]" src={logo} alt="" /></Link> 
                </div>
                <div className=" w-[600px] h-full flex items-center gap-4 font-bold">
                    <NavLink to="/" className={({isActive})=>` uppercase hover:text-rose-600 ${isActive? 'text-rose-600':'text-slate-600'} `}>Home</NavLink>
                    <NavLink to="/about" className={({isActive})=>` uppercase hover:text-rose-600 ${isActive? 'text-rose-600':'text-slate-600'} `}>About Us</NavLink>
                    <NavLink to="/contact" className={({isActive})=>` uppercase hover:text-rose-600 ${isActive? 'text-rose-600':'text-slate-600'} `}>Contact Us</NavLink>
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
                           <NavLink to="/memberLogIn" className={({isActive})=>` shrink-0 uppercase hover:text-rose-600 ${isActive? 'text-rose-600':'text-slate-600'} `}>
                                <button className=" py-2 px-2 rounded-l-md flex items-center justify-center "> 
                                    <span> Member LogIn</span>
                                </button>
                            </NavLink>
                            <NavLink to="/memberSignUp"  className={({isActive})=>` shrink-0 uppercase hover:text-rose-600 ${isActive? 'text-rose-600':'text-slate-600'} `}>
                                <button className=" py-2 px-2 rounded-r-md flex items-center justify-center border-l-2 border-slate-300"> 
                                    <span> Become A Member</span>
                                </button>
                            </NavLink>
                        </div>

                        
                    }

                </div>
            </nav>
        </>
    )
}

export default Nav;