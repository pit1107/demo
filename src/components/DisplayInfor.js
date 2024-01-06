import React from "react";


class DisplayInfor extends React.Component {
    render() {

        //props => viet tat properties
        //destructuring array/obj
        const { listUsers } = this.props; //object
       
        // const listUsers = this.props.listUsers
        return (
            <div>
                {/* ham map() lap tung phan tu */}
                {listUsers.map((user, index) => {
                    console.log(user)
                    return (
                        <div key={user.id}>
                            <div>My name is {user.name}</div>
                            <div>My age is {user.age}</div>
                            <hr />
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default DisplayInfor;