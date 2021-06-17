import Sdata from "./Sdata";
import "./style.css";
const Skills = () => {
    return (
        <>
            <div className="my-3">
                <h1 className="text-center">My Skills</h1>
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-5">
                            {Sdata.map((val, ind) => {
                                return <Card key={ind}
                                    imgsrc={val.imgsrc}
                                    title={val.title}
                                    imgalt={val.imgalt}
                                    level={val.level}
                                />
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};
const Card = (props) => {
    return (
        <>
            <div className="col-md-4 mx-auto">
                <div className="skills_card">
                    <div className="card_img_div">
                        <img src={props.imgsrc} alt={props.imgalt} className="card_img" />
                    </div>
                    <div className="card_info">
                        <h3>{props.title}</h3>
                        <p>{`Level: ${props.level}`}</p>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Skills;