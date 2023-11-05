import Nav from "../components/Nav";
import Footer from "../components/Footer";
import home from '../assets/images/home.jpg'
import event1 from '../assets/images/event1.jpg'
import event2 from '../assets/images/event2.jpg'
import event3 from '../assets/images/event3.jpeg'
import { FaFlag, FaPaperPlane, FaRocket } from "react-icons/fa6";
import { useEffect } from "react";
import Top from "../components/Top";

function Home(){

    useEffect(()=>{
        window.scroll(0,0)
    })

    return(
        <div>
            <Nav/>
            <Top/>
            <div className=" w-full h-[800px] bg2 py-20 px-10 flex items-center">

                <div className=" w-full font-bold">
                    <div>
                        <h1 className=" text-6xl text-cyan-900 mb-6">LIVING OUR VALUES.</h1>
                        <h1 className=" text-6xl text-rose-600">BUILDING OUR COMMUNITY.</h1>
                    </div>
                    <div className=" w-[500px] border-l-4 border-rose-600">
                        <h4 className=" pl-4 mt-10 text-lg text-justify">
                        <span className=" text-rose-600 font-extrabold">abip.org.uk</span> is  a nonprofit organization that restores, builds, and manages social values in a professional way
                        </h4>
                    </div>
                </div>
                <div className=" w-[650px] shrink-0 ">
                    <img className=" w-full border-[20px] border-cyan-900" src={home} alt="" />
                </div>
            </div>
            <div className=" w-full h-[800px] bg1 flex gap-10 items-center justify-center">
                <div className=" w-[380px] h-[400px] p-4 pt-6 bg-slate-100 shadow-lg rounded-md">
                    <h2 className=" pb-4 text-5xl flex justify-center text-rose-700"><FaPaperPlane/></h2>
                    <h2 className=" text-3xl font-bold text-center"> Our <span className=" text-rose-700">Mission</span></h2>
                    <h4 className=" pt-4 text-xl font-semibold text-slate-600 text-justify">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever as their default model text. 
                    </h4>
                </div>
                <div className=" w-[380px] h-[400px] p-4 pt-6 bg-slate-100 shadow-lg rounded-md">
                    <h2 className=" pb-4 text-5xl flex justify-center text-rose-700"><FaRocket/></h2>
                    <h2 className=" text-3xl font-bold text-center"> Our <span className=" text-rose-700">Vision</span></h2>
                    <h4 className=" pt-4 text-xl font-semibold text-slate-600 text-justify">
                    Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. 
                    </h4>
                </div>
                <div className=" w-[380px] h-[400px] p-4 pt-6 bg-slate-100 shadow-lg rounded-md">
                    <h2 className=" pb-4 text-5xl flex justify-center text-rose-700"><FaFlag/></h2>
                    <h2 className=" text-3xl font-bold text-center"> Our <span className=" text-rose-700">Goal</span></h2>
                    <h4 className=" pt-4 text-xl font-semibold text-slate-600 text-justify">
                    All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words. 
                    </h4>
                </div>
            </div>
            <div className=" w-full h-[800px] py-20">
            <div>
                    <h1 className=" text-5xl text-cyan-900 text-center font-bold">Our Amazing Events</h1>
                    <div className=" pt-20 flex items-center justify-center gap-10">
                        <div style={{backgroundImage: `url(${event1})`}} className=" w-[450px] h-[380px] bg-cover rounded-md relative">
                            <div className=" w-[90px] h-[90px] m-3 float-right bg-slate-500/25 rounded-lg text-slate-100 flex flex-col items-center justify-center">
                            <h4 className=" text-center text-2xl font-bold">12</h4>
                            <h5 className=" text-center">April 2023</h5>
                            </div>
                            <div className=" w-full h-[50px] absolute bottom-0 bg-slate-700/50 rounded-md">
                                <h2 className=" w-full text-3xl text-slate-100 text-center ">Members Meet Up</h2>
                            </div>
                        </div>
                        <div style={{backgroundImage: `url(${event2})`}} className=" w-[450px] h-[380px] bg-cover rounded-md relative">
                            <div className=" w-[90px] h-[90px] m-3 float-right bg-slate-500/25 rounded-lg text-slate-100 flex flex-col items-center justify-center">
                            <h4 className=" text-center text-2xl font-bold">26</h4>
                            <h5 className=" text-center">July 2023</h5>
                            </div>
                            <div className=" w-full h-[50px] absolute bottom-0 bg-slate-700/50 rounded-md">
                                <h2 className=" w-full text-3xl text-slate-100 text-center ">Career Build Up Conference</h2>
                            </div>
                        </div>
                        <div style={{backgroundImage: `url(${event3})`}} className=" w-[450px] h-[380px] bg-cover rounded-md relative">
                            <div className=" w-[90px] h-[90px] m-3 float-right bg-slate-500/25 rounded-lg text-slate-100 flex flex-col items-center justify-center">
                            <h4 className=" text-center text-2xl font-bold">21</h4>
                            <h5 className=" text-center">October 2023</h5>
                            </div>
                            <div className=" w-full h-[50px] absolute bottom-0 bg-slate-700/50 rounded-md">
                                <h2 className=" w-full text-3xl text-slate-100 text-center ">Celebration Night </h2>
                            </div>
                        </div>
                    </div>
                    <div className=" w-full flex items-center justify-center py-20">
                        <button className=" py-2 px-4 bg-rose-600 rounded-md">View More...</button>
                    </div>
                </div>

            </div>
            <Footer/>
        </div>
    )
}

export default Home;