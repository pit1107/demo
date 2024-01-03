import React from "react";

class Mycomponent extends React.Component {

    //JSX
    render() {
        return (
            <div>
                My first component
                {Math.random()}
            </div>
        );
    }
}

export default Mycomponent;