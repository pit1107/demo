import React from "react";

class Mycomponent extends React.Component {

    state = {
        name: 'Phat',
        address: 'Pit1107',
        age: 22
    };

    //JSX
    render() {
        return (
            <div>
                My first component
                
                My name is {this.state.name} and I'm from {this.state.address}
            </div>
        );
    }
}

export default Mycomponent;