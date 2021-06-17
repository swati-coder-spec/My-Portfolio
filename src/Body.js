import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./index.css"
import Home from '../src/Home';
import About from '../src/About';
import Contact from '../src/Contact';
import Skills from '../src/Skills';
import { Switch, Route, Redirect } from "react-router-dom";

const Body = () => {
    return (
        <>
            <Switch>
                <Route path="/My-Portfolio/skills" component={Skills} />
                <Route path="/My-Portfolio/contact" component={Contact} />
                <Route path="/My-Portfolio/about" component={About} />
                <Route path="/My-Portfolio" component={Home} />
                <Redirect to="/My-Portfolio" />
            </Switch>
        </>
    )
}
export default Body;