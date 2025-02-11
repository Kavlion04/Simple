import "./Main.css"
import img1 from "../../assets/images/Oval.png";
import img2 from "../../assets/images/Illustration (1).png";
import img3 from "../../assets/images/Oval (1).png";
import icons from "../../assets/icons/Icon.png";

function Main() {
  return (
    <div className='main1'>
      <h1>Make your website <span>wonderful</span></h1>
      <p className="main1-p">
      Our landing page template works on all devices, so you only have to 
      set it up once, and get beautiful results forever.
      </p>
      <div className="all-btn">
        <button className="btn1">Start free trial</button>
        <button className="btn2">Learn more</button>
      </div>
      <div className="imgs">
        <img className="oval" src={img1} alt="" />
        <img className="ill" src={img2} alt="" />
        <img className="oval2" src={img3} alt="" />
        <button className="btn-video"><img src={icons} alt="" /> Watch the full video (2 min)</button>
      </div>
    </div>
  )
}

export default Main;
