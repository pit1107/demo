import React from "react";

class UserInfor extends React.Component {

    //Cac ham de day
    state = {
        name: 'Phat dep trai',
        address: 'Pit1107',
        age: 22
    };


    // arrow function ... = ... => {}



    handleOnChangeInput = (event) => {
        this.setState({
            name: event.target.value
        })
        // console.log(event,event.target.value);
    }

    handleOnChangeAge = (event) => {
        this.setState({
            age: event.target.value
        })
        // console.log(event,event.target.value);
    }

    // Dung o form toi uu hon dung o button
    handleClickButton = (event) => {
        event.preventDefault()

        console.log(this.state)
    }

    render() {
        return (
            // The html
            <div>
                My name is {this.state.name} and I'm {this.state.age}
                <button onClick={(event) => { this.handleClick(event) }}>Click me</button>
                <form onSubmit={(event) => { this.handleClickButton(event) }}>
                    <label>My name is: </label>
                    <input
                        value={this.state.name}
                        type="text"
                        onChange={(event) => {
                            this.handleOnChangeInput(event)
                        }}
                    />
                    <label>Age is: </label>
                    <input
                        value={this.state.age}
                        type="text"
                        onChange={(event) => {
                            this.handleOnChangeAge(event)
                        }}
                    />
                    <button>Submit</button>
                </form>

            </div>
        );
    }
}

export default UserInfor;