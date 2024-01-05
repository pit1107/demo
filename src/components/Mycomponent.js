import React, { cloneElement } from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

class Mycomponent extends React.Component {

    
    //JSX
    render() {
        const myAge = 22;
        const my = ['ac', 'af', 'afas'];
        return (
            <div>
                My first component


                <UserInfor />
                <br /> <br />
                <DisplayInfor name='Pit1107' age={myAge} my={my}/>
            </div>
        );
    }
}

export default Mycomponent; 