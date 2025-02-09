import './App.css'
import Button from './components/Button/Button'
import Header from './components/Header/Header'
import Main1 from './components/Main/Main1'
import Main2 from './components/Main2/Main2'
import Main3 from './components/Main3/Main3'
import svg1 from "./assets/icons/Icon (3).svg"
import svg2 from "./assets/icons/Icon (4).svg"
import svg3 from "./assets/icons/Icon (5).svg"
import svg4 from "./assets/icons/Icon (6).svg"
import svg5 from "./assets/icons/Icon (7).svg"
import svg6 from "./assets/icons/Icon (8).svg"
import Main4 from './components/Main4/Main4'
import Input from './components/Input/Input'
import Footer from './components/Footer/Footer'
import rrr from "./assets/icons/Logo.png"


function App() {

  return (
    <div>
      <Header />
      <Main1 />
      <Main2 />
      <Main3 />
      <div className='buttonss'>
        <Button title="Initial Contact" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." svg={svg1} />
        <Button title="Discovery Session" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." svg={svg2} />
        <Button title="Contracting" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." svg={svg3} />
        <Button title="Fast Prototyping" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." svg={svg4} />
        <Button title="Design Phase" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." svg={svg5} />
        <Button title="Develop & Launch" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." svg={svg6} />
      </div>
      <Main4 />
      <Input />
      <Footer />
      <div id="myModal" className="modal">
        <div className="modal-content">
          <img src={rrr} alt="" />
          <span className="close">&times;</span>
          <h5>Welcome back. We exist to make entrepreneurship easier</h5>
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
              <input type="checkbox" name="" id="forget" />
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
     
    </div>

  )
}

export default App
