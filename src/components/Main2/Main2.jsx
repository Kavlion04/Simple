import "./Main2.css"
import imgss from "../../assets/images/Illustration (2).png";
import imgss2 from "../../assets/icons/Icon.svg";
import imgss3 from "../../assets/icons/Icon (1).svg";
import imgss4 from "../../assets/icons/Icon (2).svg";
function Main2() {
    return (
        <div className="main2">
            <div className="line">
            </div>
            <h2>Explore the solutions</h2>
            <p className="main2-p">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.
            </p>
            <div className="cardss">
                <div className="cards">
                    <b className="cards-t">Powerful suite of tools</b>
                    <p className="cards-p">
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa.
                    </p>
                    <div className="card">
                        <div className="card-text">
                            <b className="card-t">Building the Simple ecosystem</b>
                            <p className="card-p">
                                Take collaboration to the next level with security and administrative features built for teams.
                            </p>
                        </div>
                        <img src={imgss2} alt="" />
                    </div>
                    <div className="card">
                        <div className="card-text">
                            <b className="card-t">Building the Simple ecosystem</b>
                            <p className="card-p">
                                Take collaboration to the next level with security and administrative features built for teams.
                            </p>
                        </div>
                        <img src={imgss3} alt="" />
                    </div>
                    <div className="card">
                        <div className="card-text">
                            <b  className="card-t">Building the Simple ecosystem</b>
                            <p className="card-p">
                                Take collaboration to the next level with security and administrative features built for teams.
                            </p>
                        </div>
                        <img src={imgss4} alt="" />
                    </div>

                </div>
                <img className="cards-img" src={imgss} alt="" />
            </div>
            

        </div>
    )
}

export default Main2;
