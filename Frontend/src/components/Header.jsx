import { Link } from 'react-router-dom';
import './header.css';

function Header(){
    return(
        <header className="header">
            <div className="header-left">
                {/* <img className='header-logo' src="/logo.png" alt="CIRS Logo" /> */} 
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" />
                </svg>
                <h1 id="header-title">CIRS</h1>
            </div>
            <nav className='header-nav'>
                <Link to="/" className='nav-link'>Home</Link>
                <Link to="/dashboard" className='nav-link'>Dashboard</Link>
                <Link to="/about" className='nav-link'>About</Link>
                <Link to="/faqs" className='nav-link'>FAQs</Link>
                <Link to="/contact" className='nav-link'>Contact</Link>
            </nav>

            <div className="header-right">
                {/* <img className='avatar-img' src="/" alt="avatar-img" /> */}
                <div className='user-icon'>
                    <i className="fa-solid fa-user"></i>
                </div>
                <Link to="/login" className='login-btn'>Login</Link>
            </div>

        </header>
    );

};
export default Header;