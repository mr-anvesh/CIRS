import { useState } from 'react';
import './Login.css';
import campusImage from '../assets/campus.jpg';

function Login() {
  const [activeTab, setActiveTab] = useState('login');

  function loginController() {
    setActiveTab('login');
  }

  function signupController() {
    setActiveTab('signup');
  }

  return (
    <main className="login-page">
      <section className="login-shell">
        <div
          className="login-left"
          style={{
            backgroundImage:
              'linear-gradient(rgba(59,76,124,0.84), rgba(59,76,124,0.84)), url(' + campusImage + ')',
          }}
        >
          <div className="brand">
            <i className="fa-solid fa-bullhorn"></i>
            <span>CIRS</span>
          </div>

          <h1>
            {activeTab === 'login'
              ? 'Make Your Campus Better, Together.'
              : 'Join CIRS Today.'}
          </h1>

          <p>
            {activeTab === 'login'
              ? 'Report issues, track resolutions, and contribute to a safer, more efficient university environment.'
              : 'Create your account to report campus issues and track updates in one place.'}
          </p>

          <div className="left-note">
            <i className="fa-solid fa-shield"></i>
            <span>Secure enterprise-grade authentication for all university members.</span>
          </div>
        </div>

        <div className="login-right">
          <div className="tabs">
            <button
              className={activeTab === 'login' ? 'tab active' : 'tab'}
              type="button"
              onClick={loginController}
            >
              Login
            </button>
            <button
              className={activeTab === 'signup' ? 'tab active' : 'tab'}
              type="button"
              onClick={signupController}
            >
              Sign Up
            </button>
          </div>

          {activeTab === 'login' ? (
            <>
              <h2>Welcome Back</h2>
              <p className="sub">Enter your credentials to access your dashboard.</p>

              <form className="login-form" onSubmit={(e) => e.preventDefault()}>
                <label>University ID or Email</label>
                <div className="input-wrap">
                  <i className="fa-solid fa-user"></i>
                  <input type="text" placeholder="e.g. 100456789 or name@uni.edu" />
                </div>

                <div className="label-row">
                  <label>Password</label>
                  <a href="#">Forgot password?</a>
                </div>

                <div className="input-wrap">
                  <i className="fa-solid fa-lock"></i>
                  <input type="password" placeholder="••••••••" />
                </div>

                <label className="remember">
                  <input type="checkbox" />
                  <span>Remember me on this device</span>
                </label>

                <button className="login-submit" type="submit">
                  Login
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </form>
            </>
          ) : (
            <>
              <h2>Create Account</h2>
              <p className="sub">Register with your university credentials.</p>

              <form className="login-form" onSubmit={(e) => e.preventDefault()}>
                <label>Full Name</label>
                <div className="input-wrap">
                  <i className="fa-solid fa-user"></i>
                  <input type="text" placeholder="Alex Johnson" />
                </div>

                <label>University Email</label>
                <div className="input-wrap">
                  <i className="fa-solid fa-envelope"></i>
                  <input type="email" placeholder="name@uni.edu" />
                </div>

                <label>University ID</label>
                <div className="input-wrap">
                  <i className="fa-solid fa-id-card"></i>
                  <input type="text" placeholder="100456789" />
                </div>

                <label>Password</label>
                <div className="input-wrap">
                  <i className="fa-solid fa-lock"></i>
                  <input type="password" placeholder="Create a password" />
                </div>

                <label>Confirm Password</label>
                <div className="input-wrap">
                  <i className="fa-solid fa-lock"></i>
                  <input type="password" placeholder="Confirm password" />
                </div>

                <label className="remember">
                  <input type="checkbox" />
                  <span>I agree to Terms and Privacy Policy</span>
                </label>

                <button className="login-submit" type="submit">
                  Sign Up
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </form>
            </>
          )}

          <div className="divider">OR CONTINUE WITH</div>

          <button className="sso-btn" type="button">
            <i className="fa-solid fa-graduation-cap"></i>
            Sign in with University SSO
          </button>

          <div className="meta">
            <span>© 2026 CIRS Platform</span>
            <div className="meta-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Help Desk</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Login;