/* eslint-disable react/prop-types */


function SignUpSteps({step}){
    return(
        <div className=" flex items-center justify-center">
            <div className={` w-[50px] h-[50px] rounded-full border-2 border-cyan-900 flex items-center justify-center`}><span>1</span></div>

            <div className={` w-[100px] h-[2px] ${(step > 1)? 'bg-cyan-900':' bg-slate-400'} `}></div>
            <div className={` w-[50px] h-[50px] rounded-full border-2 ${(step > 1)? 'border-cyan-900':' border-slate-400'} flex items-center justify-center`}><span>2</span></div>

            <div className={` w-[100px] h-[2px] ${(step > 2)? 'bg-cyan-900':' bg-slate-400'} `}></div>
            <div className={` w-[50px] h-[50px] rounded-full border-2 ${(step > 2)? 'border-cyan-900':' border-slate-400'} flex items-center justify-center`}><span>3</span></div>


        </div>
    )
}

export default SignUpSteps;