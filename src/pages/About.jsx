import Footer from "../components/Footer";
import Nav from "../components/Nav";
import logo from '../assets/images/logo.png';
import { FaFlag, FaPaperPlane, FaRocket } from "react-icons/fa6";
import { useEffect } from "react";
import Top from "../components/Top";

function About(){
    useEffect(()=>{
        window.scroll(0,0)
    })

    return(
        <div>
            <Nav/>
            <Top/>
            <div  className=" w-full h-[500px] banner bg-no-repeat bg-cover  flex items-center justify-center">
                <div className=" text-white font-bold text-5xl">About Us</div>
            </div>
            <div className=" w-full h-[800px] py-24 flex px-20">
                <div className=" w-full">
                    <div className=" text-5xl font-bold text-cyan-900" >About Our Community</div>
                    <div className=" py-20 text-lg text-justify">
                        <p>
                            Entrepreneurs from the technology world will be members - such as IT, e-commerce, ITES, call center and BPO, fintech, and business entrepreneurs who are solving various social and national problems with innovative ideas.
                        </p>
                        <br />
                        <p>
                            These types of startup entrepreneurs are often very stressed and exhausted due to their innovation. Due to the fact that they do not have much movement outside their boundaries, the founder's community club ltd is formed with the aim of social, physical, mental and emotional health and wellness through this club.
                        </p>
                    </div>
                </div>
                <div className=" w-[500px] shrink-0">
                    <img src={logo} alt="" />
                </div>
            </div>
            <div className=" w-full h-[800px] bg1 flex gap-10 items-center justify-center">
                <div className=" w-[380px] h-[400px] p-4 pt-6 bg-slate-300 shadow-lg rounded-md">
                    <h2 className=" pb-4 text-5xl flex justify-center text-rose-700"><FaPaperPlane/></h2>
                    <h2 className=" text-3xl font-bold text-center"> Our <span className=" text-rose-700">Mission</span></h2>
                    <h4 className=" pt-4 text-xl font-semibold text-slate-600 text-justify">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever as their default model text. 
                    </h4>
                </div>
                <div className=" w-[380px] h-[400px] p-4 pt-6 bg-slate-300 shadow-lg rounded-md">
                    <h2 className=" pb-4 text-5xl flex justify-center text-rose-700"><FaRocket/></h2>
                    <h2 className=" text-3xl font-bold text-center"> Our <span className=" text-rose-700">Vision</span></h2>
                    <h4 className=" pt-4 text-xl font-semibold text-slate-600 text-justify">
                    Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. 
                    </h4>
                </div>
                <div className=" w-[380px] h-[400px] p-4 pt-6 bg-slate-300 shadow-lg rounded-md">
                    <h2 className=" pb-4 text-5xl flex justify-center text-rose-700"><FaFlag/></h2>
                    <h2 className=" text-3xl font-bold text-center"> Our <span className=" text-rose-700">Goal</span></h2>
                    <h4 className=" pt-4 text-xl font-semibold text-slate-600 text-justify">
                    All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words. 
                    </h4>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default About;