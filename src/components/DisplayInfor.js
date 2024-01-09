import React from "react";


class DisplayInfor extends React.Component {


    state = {
        isShowListUser: false
    }
    handleShowHide = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser
        })
    }
    render() {


        //props => viet tat properties
        //destructuring array/obj
        const { listUsers } = this.props; //object
        // console.table(listUsers)
        // const listUsers = this.props.listUsers
        return (
            <div>
                <div>
                    <span onClick={() => { this.handleShowHide() }}>
                        {this.state.isShowListUser === true ? "Hide list user": "Show list user"}
                        </span>
                </div>
                {this.state.isShowListUser &&
                    <div>
                        {/* ham map() lap tung phan tu */}
                        {listUsers.map((user, index) => {
                            console.log(user)
                            return (
                                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                    <div>My name is {user.name}</div>
                                    <div>My age is {user.age}</div>
                                    <hr />
                                </div>
                            );
                        })}
                    </div>
                }
            </div>
        );
    }
}

export default DisplayInfor;