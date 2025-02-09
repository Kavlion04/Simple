import svg from "../../assets/icons/Combined Shape (2).png";
import oval from "../../assets/images/Oval.png"
import "./Input.css";

function Input() {
    return (
        <div className="input-box">
            <img className="ovall" src={oval} alt="" />
            <div className='input'>
                <img src={svg} alt="" />
                <div className="Searh">
                    <b>Powering your business</b>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit nemo expedita voluptas culpa sapiente.
                    </p>
                    <div className="input-btn">
                        <input type="text" placeholder="Your email" />
                        <button className="btn-input">Start free trial</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Input