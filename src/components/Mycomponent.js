import React, { cloneElement } from "react";
import UserInfor from "./UserInfor";

class Mycomponent extends React.Component {


    //JSX
    render() {
        return (
            <div>
                My first component


                <UserInfor />

            </div>
        );
    }
}

export default Mycomponent; 