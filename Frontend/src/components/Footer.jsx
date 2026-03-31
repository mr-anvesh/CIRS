import './Footer.css';

function Footer(){
    return(
        <>
        <footer className="footer">
            <div className="footer-left">
                <div className="footer-logo">
                    <i className="fa-solid fa-building-columns"></i>
                </div>
                <span className="footer-brand">CIRS</span>
            </div>
            <div className="footer-links">
                <a href="#privacy">Privacy Policy</a>
                <a href="#terms">Terms of Service</a>
                <a href="#accessibility">Accessibility</a>
            </div>
            <p className="footer-copy">
                &copy; 2026 University Campus Issue Reporting System
            </p>
        </footer> 
        </>
    );
}
export default Footer;