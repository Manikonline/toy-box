import { Link, NavLink } from "react-router-dom";
import './Header.css'
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Header = () => {

  const {user,logOut}=useContext(AuthContext)

  const handleLogOut=()=>{
   logOut()
  }
    return (
        <div>
            <div className="navbar bg-blue-950">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path className="text-yellow-400" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      <NavLink to='/' className=" ms-2  active  ">Home</NavLink>
      <NavLink  to='/alltoy' className=" ms-2 ">All Toy</NavLink>
      <NavLink to='/mytoys' className=" ms-2 ">My Toys</NavLink>
      <NavLink to='/addatoy' className=" ms-2 ">Add A Toy</NavLink>
      <NavLink  to='/blog' className=" ms-2">Blog</NavLink>
      {
      user && <> <img title={user?.displayName} className="rounded-full ms-3 user-img" src={user?.photoURL} alt="" /> <Link onClick={handleLogOut} className="ms-2 text-black">LogOut</Link> </>
      }
      
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl"><img className="img-fluid rounded-full"  src="../../../../public/rsz_logo.png" alt="" /></a>
    <h2 className=" company-name  font-extrabold italic">TOY BOX</h2>
  </div>
  <div className="navbar-center hidden lg:flex">
    
      <Link to='/' className="text-white ms-3   ">Home</Link>
      <Link to='/alltoy' className="text-white ms-3 ">All Toy</Link>
      <Link to='/mytoys' className="text-white ms-3 ">My Toys</Link>
      <Link to='/addatoy' className="text-white ms-3 ">Add A Toy</Link>
      <Link to='/blog' className="text-white ms-3 ">Blog</Link>
      
     {
      user && <> <img title={user?.displayName} className="rounded-full ms-3 user-img" src={user?.photoURL} alt="" /> <Link onClick={handleLogOut} className="ms-3 text-white">LogOut</Link> </>
     }
   
  </div>
  <div className="navbar-end text-white me-5">
    <Link to='/login'>Login</Link>
  </div>
</div>
        </div>
    );
};

export default Header;