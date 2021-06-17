import img from "../images/about/Customer Support/custmer support.svg";
import "./style.css";
const About = () => {
    return (
        <>
                <section id="header">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row header_div">
                                <div className="col-sm-10 col-lg-6 pt-5 pt-lg-0 order-lg-1 order-1 d-flex justify-content-center flex-column info_div">
                                    <h1>Know More About<br/><strong className="brand-name">Swati Gupta</strong> </h1>
                                    <h2 className="my-3">I am a Frontend Web Developer who has the Knowledge of HTML, CSS, Bootstrap, Javascript and React also.</h2>
                                    <div className="mt-3 btn_div">
                                        <a href="https://www.instagram.com/swatigupta4974/" className="btn-get-started get_started_btn">Contact now</a>
                                    </div>
                                </div>
                                <div className="col-sm-10 col-md-12 col-lg-6 order-1 order-lg-2 header-img">
                                    <img src={img} className="img-fluid animated" alt="about-img"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};

export default About;