import React, { useEffect } from "react";
import Header from "../../components/Header";
import { useDispatch,useSelector } from "react-redux";
import getUsers from "../../store/action/Users";
import { Link } from "react-router-dom";
const UsersPage = () => {
    const dispatch = useDispatch()
    const {
        userListLoading,
        userListError,
        userListSuccess,
        userListData
    } = useSelector((state) => {
        return state.user
    });
    useEffect(() => {
        dispatch(getUsers());
    },[]);
    console.log(
        userListLoading,
        userListError,
        userListSuccess,
        userListData)
    return (
        <>
            <Header activeElement={"users"}/>
            <div className="home-page">
                <div className="page-header">
                    <h1>User List</h1>
                </div>
                <div className="page-contant">
                    <p>Here is list of all user ....</p>
                </div>
            </div>
            <div className="user-table">
            {!userListLoading && userListSuccess && <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Address</th>
                            <th>Website</th>
                            <th>Username</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userListSuccess && userListData && userListData.length > 0 && userListData.map((user,key) => {
                            return (
                                <tr key={key}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                    <td>{user.address.street} - {user.address.city}, {user.address.zipcode}</td>
                                    <td>{user.website}</td>
                                    <td>{user.username}</td>
                                    <td><Link to={"/users/"+user.id}>Go....</Link></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>}
                {userListLoading && <div> <h2>User List Loading ....</h2></div>}
                {userListError && <div> <h2>User Has some error....</h2></div>}
            </div>
        </>
    )
}

export default UsersPage;