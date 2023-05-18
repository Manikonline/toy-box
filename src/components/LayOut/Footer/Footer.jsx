import { Link } from "react-router-dom";
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";


const Footer = () => {
    return (
        <div className="">
            <footer className="footer p-10 bg-blue-950 text-white">
  <div>
    <span className="footer-title">Services</span> 
    <a className="link link-hover">Branding</a> 
    <a className="link link-hover">Design</a> 
    <a className="link link-hover">Marketing</a> 
    <a className="link link-hover">Advertisement</a>
  </div> 
  <div>
    <span className="footer-title">Company</span> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </div>
</footer> 
<footer className="footer px-10 py-4 border-t bg-blue-950 text-white border-base-300">
  <div className="items-center grid-flow-col">
     <img className="width='24' height='24' viewBox='0 0 24 24' img-fluid rounded-full " src="../../../../public/rsz_1logo.png" alt="" />
    <p><Link to='/' className="font-bold text-white">TOY BOX</Link> Industries Ltd. <br/><p>Location: Dhaka, Bangladesh</p> <p className="text-muted mt-2"> Copyright &copy;<a className="text-decoration-none text-info " ><b> <Link>TOY BOX</Link></b></a> Company Ltd. All Rights Reserved  </p> </p>
  </div> 
  <div className="sm:place-self-center  md:justify-self-end">
    <div className="grid grid-flow-col gap-4">
    <Link className="text-3xl  rounded-full" ><FaFacebookSquare  ></FaFacebookSquare> </Link>
    <Link  className="text-3xl  rounded-full" ><FaTwitterSquare></FaTwitterSquare></Link>
    <Link  className="text-3xl  rounded-full" ><FaInstagramSquare></FaInstagramSquare></Link>
    </div>
  </div>
</footer>
        </div>
    );
};

export default Footer;