import { Link, NavLink } from "react-router-dom";
import { FaUserPlus } from "react-icons/fa6";
import useAuth from "../hooks/useAuth";
import baseUrl from "../url";
function Nav(){
    const  { status, photo, role } = useAuth();

    return(
        <nav className=" w-full h-[70px] sticky top-0 z-20 flex items-center justify-between  bg-slate-300 px-20">
            <div  className=" w-[200px] h-full flex items-center justify-center">
                <Link to="/"><span className=" text-3xl uppercase">LOGO Here</span></Link> 
            </div>
            <div className=" w-[600px] h-full flex items-center gap-4 ">
                <NavLink to="/" className={({isActive})=>` uppercase ${isActive? 'text-orange-600':'text-slate-800'} `}>Home</NavLink>
                <NavLink to="/about" className={({isActive})=>` uppercase ${isActive? 'text-orange-600':'text-slate-800'} `}>About Us</NavLink>
                <NavLink to="/contact" className={({isActive})=>` uppercase ${isActive? 'text-orange-600':'text-slate-800'} `}>Contact Us</NavLink>
            </div>
            <div className=" w-[180px] ">
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
                    <Link to="/memberLogIn">
                        <button className=" py-2 px-2 rounded-md flex items-center justify-center bg-cyan-900 text-slate-200"> 
                            <FaUserPlus className=" text-2xl mr-1"/> 
                            <span> Member LogIn</span>
                        </button>
                    </Link>
                     
                }

            </div>
        </nav>
    )
}

export default Nav;