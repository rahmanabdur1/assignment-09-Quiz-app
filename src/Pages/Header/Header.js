import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="navbar header shadow-xl px-10 header-container">
            <div className="flex-1">
                <Link to="/" style={{ fontSize: '20px', color: 'blue' }} className="btn btn-ghost normal-case text-xl">Quiz App</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><Link style={{ fontSize: '20px', color: 'blue', fontWeight: 'bold' }} to="/">Topics</Link></li>
                    <li><Link style={{ fontSize: '20px', color: 'blue', fontWeight: 'bold' }} to="/statistic">Statistic</Link></li>
                    <li><Link style={{ fontSize: '20px', color: 'blue', fontWeight: 'bold' }} to="/blog">Blogs</Link></li>
                    <li><Link style={{ fontSize: '20px', color: 'blue', fontWeight: 'bold' }} to="/login">Login</Link></li>
                    <li><Link style={{ fontSize: '20px', color: 'blue', fontWeight: 'bold' }} to="/signup">Register</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
