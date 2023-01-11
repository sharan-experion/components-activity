import { Component } from "react";
import NavBar from "./NavBar";
class component1 extends Component {
    constructor(props) {
        super(props)
        this.state = { count : 0}
    }
    render() {
        return (
            <>
                <NavBar />
                <h1>test 1</h1>
            </>
        );
    }
}

export default component1;