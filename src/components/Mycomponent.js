import React, { cloneElement } from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

class Mycomponent extends React.Component {
    state = {
        listUsers: [
            { id: 1, name: 'Nguyen Minh Phat', age: '22' },
            { id: 2, name: 'Pit1107', age: '28' },
            { id: 3, name: 'Phat dep trai', age: '69' },
        ]
    }

    //JSX
    render() {

        //DRY: don't repeat yourself
        return (
            <div>
                <UserInfor />
                <br /> <br />

                <DisplayInfor 
                listUsers={this.state.listUsers}
                />
                

            </div>
        );
    }
}

export default Mycomponent; 