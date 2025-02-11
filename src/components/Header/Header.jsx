import logo from "../../assets/icons/Logo.png";
import './Header.css';
import meth from "../../assets/icons/Path.png";
import rrr from "../../assets/icons/Logo.png";

function Header() {
  function handleClick() {
    document.getElementById("myModal2").style.display = "block";
    document.getElementById("close").onclick = function() {
      document.getElementById("myModal2").style.display = "none";
    };
  }
  window.onclick = function (event) {
    if (event.target == document.getElementById("myModal2")) {
      document.getElementById("myModal2").style.display = "none";
    }
  }
  function handleclick() {
    document.getElementById("myModal").style.display = "block";
    document.getElementById("closes").onclick = function() {
      document.getElementById("myModal").style.display = "none";
    }
  }
  window.onclick = function (event) {
    if (event.target == document.getElementById("myModal")) {
      document.getElementById("myModal").style.display = "none";
    }
  }

  return (
    <header className='container'>
      <img className="logo" src={logo} alt="" />
      <div className="buttons">
        <button className="btn-signin" onClick={handleClick}>
          Sign in
        </button>
        <button className="btn-signup" onClick={handleclick}>
          Sign up <img src={meth} alt="" />
        </button>
      </div>
      <div id="myModal2" className="modal2">
        <div className="modal-content">
          <div className="brm-header">
            <img src={rrr} alt="" />
            <span id="close" className="close2">&times;</span>
          </div>
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
              <input type="checkbox" id="forget" />
              <label htmlFor="forget">Remember this device</label>
            </div>
            <button className="btn-modal">  Sign in</button>
            <p className='or'>
              Or
            </p>
            <button className='github'> <i className="fa-brands fa-github"></i>Continue with Github</button>
            <button className='google'> <i className="fa-brands fa-google"></i>Continue with Google</button>
            <p className='signup'>Don’t you have an account? <a href="">Sign up</a></p>
          </div>
        </div>
      </div>
      <div id="myModal" className="modal">
        <div className="modal-content">
          <div className="brm-header">
            <img src={rrr} alt="" />
            <span id="closes" className="close">&times;</span>
          </div>
          <h5>Welcome. We exist to make entrepreneurship easier</h5>
          <div className='inputs'>
            <div className="input-csss">
              <label htmlFor="text">Name <span>*</span></label>
              <input type="text" placeholder="Enter your name"/>
            </div>
            <div className='input-csss'>
              <label htmlFor="Email">Email <span>*</span></label>
              <input type="text" placeholder='Enter your email address' />
            </div>
            <div className='password-input'>
              <div className='password'>
                <label htmlFor="Password">Password <span>*</span></label>
                
              </div>
              <input type="password" placeholder='Enter your password' />
            </div>
            <button className="btn-modal">  Sign in</button>
            <p className="terms">
            By creating an account, you agree to the terms & conditions, and our privacy policy.
            </p>
            <p className='or'>
              Or
            </p>
            <button className='github'> <i className="fa-brands fa-github"></i>Continue with Github</button>
            <button className='google'> <i className="fa-brands fa-google"></i>Continue with Google</button>
            <p className='signup'>Don’t you have an account? <a href="">Sign in</a></p>
          </div>
        </div>
      </div>

    </header>


  )
}

export default Header;
