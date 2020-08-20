import React, { useState, useEffect } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';

const Header = () => {

    const [menuToggle, setMenuToggle] = useState(false)
    const [cart, setCart] = useState([])
    const [num, setNum] = useState(0);

    useEffect(() => {
        let currentCart = localStorage.getItem('cart')
        if (currentCart) {
            axios.get(`http://localhost:8000/api/orders/${currentCart}`)
                .then(res => {
                    setCart(res.data)
                    setNum(res.data.products.length)
                })
                .catch(err => console.log(err));
        }   
        else {
            setCart([])
            console.log("nope")
        }
    },[cart]);

    const toggleMenu = () => {
    const body = document.querySelector('main')
    const menuBtn = document.querySelector('.menu-btn');
    const menu = document.querySelector('.menu');
    const menuNav = document.querySelector('.menu-nav');
        const navItems = document.querySelectorAll('.nav-item');
        
        if (menuToggle == false) {
            menuBtn.classList.add('close');
            menu.classList.add('show');
            menuNav.classList.add('show');
            navItems.forEach(x => x.classList.add('show'));
            setMenuToggle(true);

        } else {
            menuBtn.classList.remove('close');
            menu.classList.remove('show');
            menuNav.classList.remove('show');
            navItems.forEach(x => x.classList.remove('show'));
            setMenuToggle(false);
        }
    }
    const showCart = () => {
        localStorage.removeItem('cart')
        // console.log(cart.products);
    }
    return (
        <>
                    <div className="topNav" id="navbar">
                        <div className="menu-btn" onClick={e => toggleMenu()}>
                            <div className="btn-line"></div>
                            <div className="btn-line"></div>
                            <div className="btn-line"></div>
                        </div>
                        <nav className="menu">
                            <ul className="menu-nav">
                                <li className="nav-item" onClick={e => toggleMenu()}>
                                    <Link className="nav-link" to="/" >Home</Link>
                                </li>
                                <li className="nav-item" onClick={e => toggleMenu()}>
                                    <Link className="nav-link" to='/about' > About</Link>
                                </li>
                                <li className="nav-item" onClick={e => toggleMenu()}>
                                    <Link className="nav-link" to="/shop" >Shop</Link>
                                </li>
                            </ul>
                        </nav>
                        <nav className="header-logo">
                            <h3>Somatic Hemp</h3>
                            <button onClick={showCart}>reset</button>
                        </nav>
                <nav className="shopping-cart">
                   <Link className="nav-link" to="/cart">
                        <i id="cart" className="fa fa-shopping-cart fa-2x" aria-hidden="true"> <span id="badge">
                        {num}
                    </span></i>
                        </Link>
                    
                                
                        </nav>
                    </div>
        </>
    )
}
// window.onscroll = function() {myFunction()};



// function myFunction() {
//     var navbar = document.getElementById('navbar')
//     var sticky = navbar.offsetTop;
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }
export default Header
