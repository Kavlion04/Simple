import "./Footer.css"
import imgi from "../../assets/icons/Logo.png"
import imgi1 from "../../assets/icons/1.svg"
import imgi2 from "../../assets/icons/2.svg"
import imgi3 from "../../assets/icons/3.png"
function Footer() {
    return (
        <div className="footer-container container">

            <footer className="footer">
                <div className="companyy">
                    <img className="company-img" src={imgi} alt="" />
                    <p className="company-p">
                        Terms · Privacy Policy
                    </p>
                </div>
                <div className="companyy">
                    <b className="company-b">Products</b>
                    <p className="company-p">Web Studio</p>
                    <p className="company-p">DynamicBox Flex</p>
                    <p className="company-p">Programming Forms</p>
                    <p className="company-p">Integrations</p>
                    <p className="company-p">Command-Line</p>
                </div>
                <div className="companyy">
                    <b className="company-b">Resources</b>
                    <p className="company-p">Documentation</p>
                    <p className="company-p">Tutorials & Guides</p>
                    <p className="company-p">Blog</p>
                    <p className="company-p">Support Center</p>
                    <p className="company-p">Partners</p>
                </div>
                <div className="companyy">
                    <b className="company-b">Company</b>
                    <p className="company-p">Home</p>
                    <p className="company-p">About us</p>
                    <p className="company-p">Company values</p>
                    <p className="company-p">Pricing</p>
                    <p className="company-p">Privacy Policy</p>
                </div>
                <div className="companyy">
                    <b className="company-b">Subscribe</b>
                    <p className="company-p ppp">
                        Get the latest news and articles to your inbox every month.
                    </p>
                    <input type="text" placeholder="Your email" />
                </div>

            </footer>
            
            <div className="footer-bottom container">
                <p>
                Made by <span>Cruip</span>. All rights reserved.
                </p>
                <div className="logossu">
                    <a href="https://www.twitter.com"><img src={imgi1} alt="" /></a>
                    <a href="https://github.com"><img src={imgi2} alt="" /></a>
                    <a href="https://telegram.org"><img src={imgi3} alt="" /></a>
                </div>
            </div>
        </div>
    )
}

export default Footer;