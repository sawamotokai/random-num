import React, { Component } from 'react'

class Random_num extends Component {
    constructor(props) {
        super(props);
        this.state = {
            random_num : 0
        };
        this.change_num = this.change_num.bind(this)

    }

    change_num() {
        this.setState({ random_num: Math.floor(Math.random() * 10 + 1) });      
    }

    render() {
        return (
            <div className="Random-num">
                <h1>Random number : {this.state.random_num}</h1>
                {this.state.random_num === 7 ? <h1>You win!</h1> : <button onClick={this.change_num}>Click!</button>}
            
            </div>
        );
    }

}

export default Random_num;