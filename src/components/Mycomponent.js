import React from "react";

class Mycomponent extends React.Component {

    state = {
        name: 'Phat',
        address: 'Pit1107',
        age: 22
    };


    // arrow function ... = ... => {}
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

    handleOnChangeInput = (event) => {
        this.setState({
            name: event.target.value
        })
        // console.log(event,event.target.value);
    }

    // Dung o form toi uu hon dung o button
    handleClickButton = (event) => {
        event.preventDefault()
        console.log('event.target.value');

        alert(this.state.name);
    }

    //JSX
    render() {
        return (
            <div>
                My first component

                My name is {this.state.name} and I'm {this.state.age}
                <button onClick={(event) => { this.handleClick(event) }}>Click me</button>
                <form onSubmit={(event) => { this.handleClickButton(event) }}>
                    <input
                        type="text"
                        onChange={(event) => {
                            this.handleOnChangeInput(event)
                        }}
                    />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default Mycomponent; 