import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png'
import {  FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa6";
function Footer(){
    return(
        <div className=" w-full h-[500px] p-10 bg1 bg-no-repeat bg-cover  flex gap-4 justify-between">
            <div className=' w-[380px] flex flex-col items-center'>
                <img className=' w-full' src={logo} alt="" />
                <h4 className=" flex gap-4 items-center"> 
                    <span className=" bg-slate-100 text-2xl p-2 rounded-md"><FaFacebookF/></span> 
                    <span className=" bg-slate-100 text-2xl p-2 rounded-md"><FaTwitter/></span> 
                    <span className=" bg-slate-100 text-2xl p-2 rounded-md"><FaLinkedinIn/></span> 
                    <span className=" bg-slate-100 text-2xl p-2 rounded-md"><FaInstagram/></span> 
                </h4>
            </div>

            <div className=' w-[340px] mt-16 flex gap-6  flex-col text-slate-50'>
                <h3 className=' text-2xl font-bold mb-4'>Quick Links</h3>
                <Link to="">Privacy Policy</Link>
                <Link to="">Terms & Conditions</Link>
                <Link to="/about">About Us</Link>
                <Link to="/contact">Contact Us</Link>
            </div>

            <div className=' w-[340px] mt-16 flex gap-6 flex-col text-slate-50'>
                <h3 className=' text-2xl font-bold mb-4'>Membership</h3>
                <h4>Member Registration</h4>
                <h4>EC Members</h4>
                <h4>General Members</h4>
                <h4>Founding Members</h4>
                <h4>Lifetime Members</h4>
            </div>

            <div className=' w-[340px] mt-16 flex gap-6 flex-col text-slate-50'>
                <h3 className=' text-2xl font-bold mb-4'>Contact Us</h3>
                <h4>Dara Center, Plot 30, Avenue 9, Sector - 15/D, Uttara, Dhaka-1230</h4>
                <h4>info@abip.org.uk</h4>
                <h4>+880 174946494646</h4>
            </div>
        </div>
    )
}

export default Footer;