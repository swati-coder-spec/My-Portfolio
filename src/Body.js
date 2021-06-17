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
                <Route path="/skills" component={Skills} />
                <Route path="/contact" component={Contact} />
                <Route path="/about" component={About} />
                <Route path="/" component={Home} />
                <Redirect to="/" />
            </Switch>
        </>
    )
}
export default Body;