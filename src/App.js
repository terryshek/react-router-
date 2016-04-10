import React,{ Component } from "react";
import { Router, Route, Link, IndexRoute, hashHistory} from "react-router";

const Outer = (props)=> <div><h1>Our Site</h1><Links />{props.children}</div>;
const About = () => <div><h1>About</h1></div>;
const Contact = () => <div><h1>Contact</h1></div>;
//nav 
const Links =()=>
    <nav>
        <Link activeClassName="active" to="/">home</Link> 
        <Link activeClassName="active" to="/contact">contact</Link> 
    </nav>

class App extends Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={Outer}>
                    <IndexRoute component={About}>
                    </IndexRoute>
                    <Route path="contact" component={Contact}>
                    </Route>
                </Route>
            </Router>
        )
    }
}
export default  App;
