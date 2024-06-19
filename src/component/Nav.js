import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { isLogin, username, profileImage } from './StAtom';
import Useprofile from "./Useprofile";

const NavLink = ({ to, className, children, onClick }) => (
    <Link to={to} className={className} onClick={onClick}>
        {children}
    </Link>
);

const Nav = () => {
    const isLoggedIn = useRecoilValue(isLogin);
    const savedUsername = useRecoilValue(username);
    const savedProfileImage = useRecoilValue(profileImage);
    const setIsLoggedIn = useSetRecoilState(isLogin);
    const setSavedUsername = useSetRecoilState(username);
    const setProfileImg = useSetRecoilState(profileImage);
    const [isOpen, setIsOpen] = useState(false);
    const [initialLoad, setInitialLoad] = useState(true);

    useEffect(() => {
        const user = localStorage.getItem('user');
        const username = localStorage.getItem('username');
        const userData = JSON.parse(localStorage.getItem('userData'));
        if (user && username) {
            setIsLoggedIn(true);
            setSavedUsername(username);
            setProfileImg(userData?.profileImage || null);
        }
        setInitialLoad(false);
    }, [setIsLoggedIn, setSavedUsername, setProfileImg]);

    const handleToggleMenu = () => {
        setIsOpen(!isOpen);
    };

    if (initialLoad) {
        return null;
    }

    return (
        <nav className="flex items-center justify-between m-1 px-2 py-2 bg-cover bg-no-repeat bg-center bg-[url('./img/forrest1.jpg')]">
            <div className="flex items-center text-xl">
                <NavLink to="/main" className="block lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                    <span className="font-indie-flower font-extrabold text-white ml-4">farmhani</span>
                </NavLink>
            </div>
            <div className="lg:hidden">
                <button className="menu-icon" onClick={handleToggleMenu}>
                    <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} icon text-white`}></i>
                </button>
            </div>
            <div className={`flex items-center justify-center text-xl ${isOpen ? 'flex' : 'hidden md:flex'}`}>
                <NavLink to="/gallery" className="block lg:inline-block lg:mt-0 md:mr-4 text-teal-200 hover:text-white">
                    <span className="font-neucha font-bold text-white ml-4">Gallery</span>
                </NavLink>
                <div className="flex items-center">
                    {isLoggedIn ? (
                        <NavLink
                            to="/profile"
                            className=""
                        >
                            {savedProfileImage ? (
                                <div className='w-10 h-10 overflow-hidden rounded-full transform transition-transform duration-300 hover:scale-110'>
                                     <Useprofile userdata={{ profileImage: savedProfileImage }} />
                                </div>
                               
                            ) : (
                                <div className='font-neucha inline-block text-sm px-2 py-2 leading-none border rounded font-bold text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white lg:mt-0 '>
                                {savedUsername}
                                </div>
                                
                            )}
                        </NavLink>
                    ) : (
                        <NavLink
                            to="/login"
                            className="font-neucha inline-block text-sm px-2 py-2 leading-none border rounded font-bold text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white lg:mt-0"
                        >
                            Sign In
                        </NavLink>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Nav;
