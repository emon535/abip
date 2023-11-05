
import { useEffect, useState } from "react";
import Nav from "../components/Nav";
import Step1 from "../components/signup/Step1";
import SignUpSteps from "../components/SignUpSteps";
import Step2 from "../components/signup/Step2";
import Step3 from "../components/signup/Step3";
import Footer from "../components/Footer";
import Top from "../components/Top";

function MemberSignUp(){
    const [stepCount, setStepCount] = useState(1);

    useEffect(()=>{
        window.scroll(0,0)
    })
    

    return(
        <div className=" w-full">
            <Nav/>
            <Top/>
            <div className=" w-[800px] h-auto pb-[100px] mb-20 mt-20 mx-auto p-4 rounded-sm bg-slate-200 relative">
                <h3 className=" py-2 text-xl text-center font-bold text-sky-900">Member Sign Up</h3>
                <div className=" w-full mt-6">
                    <SignUpSteps step={stepCount} />
                </div>
                <div>
                    {
                        (stepCount == 1)? <Step1 setStepCount={setStepCount} />:<></>
                    }
                    {
                        (stepCount == 2)? <Step2 setStepCount={setStepCount} />:<></>
                    }
                                 {
                        (stepCount == 3)? <Step3 setStepCount={setStepCount} />:<></>
                    }
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default MemberSignUp;