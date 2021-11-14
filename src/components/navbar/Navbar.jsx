import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import logo from '../../assets/logo.svg'
import './navbar.css';

const Menu = () => (
    <>
    <p><a href="#home">Home</a></p>
    <p><a href="#ownerinfo">Owner Info</a></p>
    <p><a href="#maps">Track with Map</a></p>
    </>
)

// BEM --> Block Element Modifier

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <div className="quicarent__navbar">
            <div className="quicarent__navbar-links">
                <div className="quicarent__navbar-links_logo">
                    <img src={logo} alt="logo" />

                </div>
                <div className="quicarent__navbar-links_container">
                <Menu />
                </div>
            </div>
            <div className="quicarent__navbar-menu"></div>
                {toggleMenu
                    ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} /> }
                    {toggleMenu && (
                        <div className="quicarent__navbar-menu_container scale-up-center">
                            <div className="quicarent__navbar-menu_container-links">
                                <Menu />
                            </div>
                        </div>
                    )}
                    
        </div>
    )
}

export default Navbar