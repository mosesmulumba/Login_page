import React , {Component }from "react";
import Nav from "./nav";
import Login from "./App";

class Container extends Component{
    render(){
        return(
            <div className="main--container">
                <Nav />
                <Login />
            </div>
        );
    }
}

export default Container;