import React from 'react';
import { useContext } from 'react';
import { FaMoon, FaSun, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Header = () => {

    const {user, logOut} = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
        .then(() => {})
        .catch(error =>console.error(error))
    }

    return (
        <div>
            <div className="navbar bg-base-300">
                <div className="navbar-start">
                    <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/course">COURSE</Link></li>
                    <li><Link to="">FAQ</Link></li>
                    <li><Link to="/blog">BLOG</Link></li>                        
                    </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost normal-case text-xl">EasyLearning</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/course">COURSE</Link></li>
                    <li><Link to="">FAQ</Link></li>
                    <li><Link to="/blog">BLOG</Link></li>
                    
                    <div className="flex justify-center w-12 ">
                    <label className="swap swap-rotate">
                    <input type="checkbox" />
                        <svg className="swap-on fill-current w-8 h-8" viewBox="0 0 24 24"><FaSun/></svg>
                        <svg className="swap-off fill-current w-8 h-8" viewBox="0 0 24 24"><FaMoon/></svg>
                    </label>
                    </div>
                    </ul>
                </div>
                <div className="navbar-end">
                
                {
                    user?.uid ? 
                    <>
                        <Link onClick={handleLogOut} className="hover:btn hover:btn-primary" to="/login">LogOut</Link>
                    </>

                    :
                    <Link  className="hover:btn hover:btn-primary" to="/login">Login</Link>
                }
                
                
                    <div className="w-10 rounded-full tooltip tooltip-info tooltip-left" data-tip={user?.displayName}>
                        {
                            user?.uid ? <img alt={user?.displayName} src={user?.photoURL} className="rounded-full"  /> : <FaUser/>
                        }
                    </div>
                </div>
                </div>
        </div>
    );
};

export default Header;