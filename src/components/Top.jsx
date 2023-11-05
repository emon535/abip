import { FaArrowUp } from "react-icons/fa6";
function Top(){
    return(
        <div onClick={()=> window.scroll(0,0)} className=" w-[50px] h-[50px] fixed bottom-[200px] right-5 z-10 bg-rose-600 text-slate-100 rounded-full flex items-center justify-center text-2xl animate-bounce cursor-pointer"><FaArrowUp/></div>
    )
}

export default Top;