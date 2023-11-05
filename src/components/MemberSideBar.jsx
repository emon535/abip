import { Link } from "react-router-dom";


function MemberSideBar(){
    return(
        <div className=" w-[250px] h-[calc(100vh-70px)] fixed shrink-0 p-6 bg-slate-300 border border-slate-400">
            <Link to="/dashboard"><div className=" bg-sta text-slate-600 font-bold border border-slate-600 pl-2 p-1 rounded-md">Profile</div></Link>
            
        </div>
    )
}

export default MemberSideBar;