import img from "../images/profile picture.jpeg";
import Instagram from "../images/instagram.png";
import Github from "../images/github.png";
import Mail from "../images/gmail.png";
import Whatsapp from "../images/whatsapp.png";
import "./style.css";
const Contact = () => {
    return (
        <>
        <div className="container contact_div">
            <div>
                <h1 className="text-center mb-5">Contact</h1>
            </div>
            <div className="row col-10 mx-auto">
                <div className="col-6 img_div">
                        <img src={img} alt="profile" className="profile_img"/>
                </div>
                <div className="col-6 btns_div">
                    <a href="https://www.instagram.com/swatigupta4974/" className="contact_btns" title="dm me on instagram">
                        <img src={Instagram} alt="instagram"/><span> Instagram DM</span>
                    </a>
                    <a href="https://github.com/swati-coder-spec" className="contact_btns" title="view my github profile">
                        <img src={Github} alt="github"/><span> GitHub Profile</span>
                    </a>
                    <a href="mailto:swatigupta4974@gmail.com" className="contact_btns" title="send mail">
                        <img src={Mail} alt="mail"/><span> Mail Me</span>
                    </a>
                    <a href="https://wa.me/+919716245286/?text=Hi Swati" className="contact_btns" title="whatsapp me">
                        <img src={Whatsapp} alt="whatsapp"/><span> Whatsapp Me</span>
                    </a>
                </div>
            </div>
        </div>
        </>
    )
};

export default Contact;