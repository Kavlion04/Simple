import logo from "../../assets/icons/Logo.png";
import './Header.css';
import meth from "../../assets/icons/Path.png";
import rrr from "../../assets/icons/Logo.png";

function Header() {
  return (
    <header className='container'>
      <img className="logo" src={logo} alt="" />
      <div className="buttons">
        <button id="openModal" className="btn-signin">
        Sign in
        </button>
        <button id="myModal2" className="btn-signup">
        Sign up <img src={meth} alt="" />
        </button>
      </div>
      <div id="myModal2" className="modal2">
        <div className="modal-content">
          <img src={rrr} alt="" />
          <span className="close2">&times;</span>
          <h6>Welcome back. We exist to make entrepreneurship easier</h6>
          <div className='inputs'>
            <div className='input-csss'>
              <label htmlFor="Email">Email</label>
              <input type="text" placeholder='Enter your email address' />
            </div>
            <div className='password-input'>
              <div className='password'>
                <label htmlFor="Password">Password</label>
                <p>Having trouble signing in?</p>
              </div>
              <input type="password" placeholder='Enter your password' />
            </div>
            <div className='checkbox'>
              <input type="checkbox"  id="forget" />
              <label htmlFor="forget">Remember this device</label>
            </div>
            <button className="btn-modal">  Sign in</button>
            <p className='or'>
              Or
            </p>
            <button className='github'> <i class="fa-brands fa-github"></i>Continue with Github</button>
            <button className='google'> <i class="fa-brands fa-google"></i>Continue with Google</button>
            <p className='signup'>Don’t you have an account? <a href="">Sign up</a></p>
          </div>
        </div>
      </div>
      
    </header>
    
    
  )
}

export default Header;
