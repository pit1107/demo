import React from "react";

class AddUserInfor extends React.Component {

    //Cac ham de day
    state = {
        name: '',
        address: 'Pit1107',
        age: ''
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
    handleOnSubmit = (event) => {
        event.preventDefault()

        // console.log(this.state)
        this.props.handleAddNewUser({
            id:Math.floor((Math.random() * 100)+ 1)+ '-random',
            name: this.state.name,
            age: this.state.age,
            address: this.state.address
        });
    }

    render() {
        return (
            // The html
            <div>
                My name is {this.state.name} and I'm {this.state.age}

                <form onSubmit={(event) => { this.handleOnSubmit(event) }}>
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
                    <button >Submit</button>
                </form>

            </div>
        );
    }
}

export default AddUserInfor;