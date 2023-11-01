import { Link } from "react-router-dom";


function AdminSideBar(){
    return(
        <div className=" w-[250px] h-[calc(100vh-70px)] p-6 bg-slate-300 border border-slate-400">
            <Link to="/members"><div className=" bg-sta text-slate-600 font-bold border border-slate-600 pl-2 p-1 rounded-md">Member List</div></Link>
            
        </div>
    )
}

export default AdminSideBar;