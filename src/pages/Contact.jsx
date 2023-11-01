import { FaEnvelope, FaF, FaFacebook, FaFacebookF, FaInstagram, FaLinkedin, FaLinkedinIn, FaMapLocation, FaPhone, FaTwitter } from "react-icons/fa6";
import Nav from "../components/Nav";

function Contact(){
    return(
        <div>
            <Nav/>

            <div className=" w-full flex gap-40 mt-40">
                <div className=" w-[40%] py-[100px] flex justify-end text-slate-200">
                    <div className=" w-[400px] h-[500px] rounded-md bg-cyan-900 ">
                        <div className=" p-4 py-6 pt-6 border-b border-slate-400">
                            <h3 className=" text-2xl py-2">Address</h3>
                            <h4 className=" flex gap-2"> 
                                <span><FaMapLocation/></span> 
                                <span>Dara Center, Plot 30, Avenue 9, Sector - 15/D, Uttara, Dhaka-1230</span>
                            </h4>
                        </div>
                        <div className=" p-4 pb-4 border-b border-slate-400">
                            <h3 className=" text-2xl py-2">Phone</h3>
                            <h4 className=" flex gap-2 items-center"> 
                                <span><FaPhone/></span> 
                                <span>+8801777111856</span>
                            </h4>
                        </div>
                        <div className=" p-4 pb-4 border-b border-slate-400">
                            <h3 className=" text-2xl py-2">Email</h3>
                            <h4 className=" flex gap-2 items-center"> 
                                <span><FaEnvelope/></span> 
                                <span>info@abip.org.uk</span>
                            </h4>
                        </div>
                        <div className=" p-4 pb-4">
                            <h3 className=" text-2xl py-2">Follow Us</h3>
                            <h4 className=" flex gap-2 items-center"> 
                                <span className=" bg-cyan-800 text-2xl p-2 rounded-md"><FaFacebookF/></span> 
                                <span className=" bg-cyan-800 text-2xl p-2 rounded-md"><FaTwitter/></span> 
                                <span className=" bg-cyan-800 text-2xl p-2 rounded-md"><FaLinkedinIn/></span> 
                                <span className=" bg-cyan-800 text-2xl p-2 rounded-md"><FaInstagram/></span> 
                            </h4>
                        </div>
                    </div>
                </div>
                <div className=" w-[60%]  ">
                    <div className=" w-full">
                        <div className=" flex items-center gap-2 font-bold text-slate-500">
                            <div className=" w-[60px] h-[2px] bg-orange-600"></div>
                            <span>Since From 2023</span>
                            <div className=" w-[60px] h-[2px] bg-orange-600"></div>
                        </div>
                        <div className=" text-4xl font-bold text-sky-900">Get In Touch</div>
                    </div>
                    <div className=" w-[700px] h-auto pb-[60px] mt-8 rounded-md bg-slate-100 border border-l-slate-400">
                        <div className=" p-4 text-2xl text-slate-600 border-b border-slate-300">Contact Us By Form</div>
                        <div className=" w-full p-4 flex gap-4">
                            <div className=" w-full">
                                <label className=" pt-4" htmlFor="name">Name*:</label>
                                <input className=" w-full py-2 px-4 mb-4 bg-white rounded-md border border-slate-300" type="text" placeholder="Enter your name:" />
                                <label className=" pt-4" htmlFor="name">Phone*:</label>
                                <input className=" w-full py-2 px-4 mb-4 bg-white rounded-md border border-slate-300" type="text" placeholder="Enter your phone:" />
                            </div>
                            <div className=" w-full">
                                <label className=" pt-4" htmlFor="name">Email*:</label>
                                <input className=" w-full py-2 px-4 mb-4 bg-white rounded-md border border-slate-300" type="text" placeholder="Enter your email:" />
                                <label className=" pt-4" htmlFor="name">Subject*:</label>
                                <input className=" w-full py-2 px-4 mb-4 bg-white rounded-md border border-slate-300" type="text" placeholder="Enter subject:" />
                            </div>
                        </div>
                        <div className=" p-4 -mt-8">
                            <label htmlFor="">Message *:</label>
                            <textarea className=" w-full rounded-md py-2 px-4" name="" id="" rows="5" placeholder="Type your message"></textarea>
                            <button className=" w-full mt-10 py-2 rounded-md text-slate-200 bg-cyan-900">Submit Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;