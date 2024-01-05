import React from "react";


class DisplayInfor extends React.Component {
    render() {
        console.log(this.props)
        //props => viet tat properties
        //destructuring array/obj
        const {name, age, my} = this.props; //object
        return (
            <div>
                <div>My name is {name}</div>
                <div>My age's {age}</div>
                <div>My age's {my}</div>
            </div>
        );
    }
}

export default DisplayInfor;