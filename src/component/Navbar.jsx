import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";
import logo from '../assets/logo.png';
const Navbar = () => {
    const { user,logOut } = useContext(AuthContext)
    const handleSignOut = () => {
        logOut()
    }
    // console.log(user.email);
    const navItems = <>
        <li><Link to='/'> Home</Link></li>
        <li><Link to='/'> About us</Link></li>
        <li><Link to='/survey'> to do</Link></li>
        <li><Link to='/dashboard/payment'>be a Pro</Link></li>
        <li><Link to='/order/salad'>Contact </Link></li>
        <li><Link to='/dashboard/dHome'>Dashboard </Link></li>
        {
            user ? <><li> <Link onClick={handleSignOut} className="">Logout</Link></li></> :
                <>
                    <li><Link to='/login'>Login</Link></li>
                    <li><Link to='/signUp'>SignUp</Link></li>
                </>
        }



    </>


    return (
        <div>
            <div className="navbar rounded-b-lg fixed z-50 bg-black lg:text-white text-black p-4 bg-opacity-0 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">
                        <img src={logo} className="w-36" alt="" />
                        {/* Whispers to Roars (quiet actions making major noise) */}
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">

                    <div>
                        {
                            user ?

                                <div className="flex gap-4 items-center mr-4">
                                    <p className="font-bold">{user?.displayName
}</p>
                                    <img src={user?.photoURL} className="w-10 rounded-full" alt="" />
                                </div> : <></>
                        }
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Navbar;