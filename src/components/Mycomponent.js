import React, { cloneElement } from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

class Mycomponent extends React.Component {
    state = {
        listUsers: [
            { id: 1, name: 'Nguyen Minh Phat', age: '16' },
            { id: 2, name: 'Pit1107', age: '28' },
            { id: 3, name: 'Phat dep trai', age: '69' },
        ]
    }

    handleAddNewUser = (userObject) => {
        console.log('>>>Check data from parent: ', userObject)
        this.setState({
            listUsers: [userObject,...this.state.listUsers]
        })
    }

    //JSX
    render() {

        //DRY: don't repeat yourself
        return (
            <div>
                <AddUserInfor
                    handleAddNewUser={this.handleAddNewUser}
                />
                <br /> <br />

                <DisplayInfor
                    listUsers={this.state.listUsers}

                />


            </div>
        );
    }
}

export default Mycomponent; 