import React, { Component } from "react";


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = { number: 0 }

       
    }
    
    increment = () => {
        this.setState({number: this.state.number+1})
    }

    dicrement = () => {
        this.setState({number: this.state.number-1})
    }

    neutral = () => {
        this.setState({number: 0})
    }

    render() { 
        return ( 
            <div className="row justify-content-center">
                <div className="col-md-6 main-div">
                    <h1>React Counter</h1>
                    <h1>{this.state.number}</h1>
                    <button className="btn btn-success" onClick={this.increment}>Increament</button>
                    <button className="btn btn-danger" onClick={this.dicrement}>Dicrement</button>
                    <button className="btn btn-primary" onClick={this.neutral}>Neutral</button>
                </div>
            </div>
            
         );
    }
}
 
export default Main;