import "./Main4.css"
import img1 from "../../assets/images/Shape.png"
import img2 from "../../assets/images/Shape (1).png"
import img3 from "../../assets/images/Shape (2).png"
import img4 from "../../assets/images/Combined Shape.png"
import img5 from "../../assets/images/Combined Shape (1).png"
import img6 from "../../assets/images/Avatar + Icon.png"
import img7 from "../../assets/images/Oval.png"
function Main4() {
  return (
    <div className="main4">
        <h4>Trusted by over 20,000 companies all over the world</h4>
        <p>
        Arcu cursus vitae congue mauris rhoncus viverra nibh cras pulvinar mattis 
        blandit libero cursus mattis.
        </p>
        <div className="logos">
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
            <img src={img5} alt="" />
        </div>
        <div className="reviews">
            <div className="review">
                <img className="review-img" src={img6} alt="" />
                <p>“ I love this product and would recommend it to anyone. Could be not easier to use, and our multiple websites are wonderful. We get nice comments all the time. “</p>
                <b>Darya Finger</b>
                <p>CEO & Co-Founder <a href="@Drowbox">@Drowbox</a></p>


            </div>
            <img className="oval12" src={img7} alt="" />

        </div>
    </div>
  )
}

export default Main4