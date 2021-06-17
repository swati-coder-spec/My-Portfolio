import img from "../images/get started/Security Colour/security colored.svg";
import {Link} from "react-router-dom";
import "./style.css";
const Home = () => {
    return (
        <>
        <section id="header">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row header_div">
                                <div className="col-sm-10 col-lg-6 pt-5 pt-lg-0 order-lg-1 order-1 d-flex justify-content-center flex-column info_div">
                                    <h1> Grow Your Business With <br/><strong className="brand-name">Swati Gupta</strong> </h1>
                                    <h2 className="my-3">Welcome to my Website, I am a Frontend Web Developer who can give your Website an Authentic and Amazing Outlook</h2>
                                    <div className="mt-3 btn_div">
                                        <Link to="/skills" className="btn-get-started get_started_btn">Get Started</Link>
                                    </div>
                                </div>
                                <div className="col-sm-10 col-md-12 col-lg-6 order-1 order-lg-2 header-img">
                                    <img src={img} className="img-fluid animated" alt="home-img"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};

export default Home;