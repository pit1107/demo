import React from "react";

class Mycomponent extends React.Component {

    state = {
        name: 'Phat',
        address: 'Pit1107',
        age: 22
    };



    handleClick = (event) => {
        console.log('Xin chao: ', this.state.name);
        // console.log(event);
        this.setState({
            name: 'Nguyen Phat',
            age: (this.state.age + 1)
        });
    }

    handleOnMoverOver(event) {
        console.log(event.pageX);
    }
    //JSX
    render() {
        return (
            <div>
                My first component

                My name is {this.state.name} and I'm {this.state.age}
                <button onMouseOver={this.handleOnMoverOver}>Hover me</button>
                <button onClick={(event) => { this.handleClick(event) }}>Click me</button>
            </div>
        );
    }
}

export default Mycomponent; 