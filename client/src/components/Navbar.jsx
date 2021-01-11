import React from 'react';
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="nav">
            <Link className="nav--logo" to="/">
                {/* <div className="nav--logo">
                    
                </div> */}
                <img src="img/kiwi_logo.png" alt="Logo" />
            </Link>
            <ul className="nav--link">
                <Link className="nav--item" to="/">
                    <li>Home</li>
                </Link>
                <Link className="nav--item" to="/products">
                    <li>Products</li>
                </Link>
                <Link className="nav--item" to="/about">
                    <li>About</li>
                </Link>
                <input type="checkbox" id="nav--icon--btn" className="nav--checkbox" />
                <label className="nav--icon--label" htmlFor="nav--icon--btn">
                    <div className="nav--icon"></div>
                </label>
            </ul>
        </nav>
    );
}