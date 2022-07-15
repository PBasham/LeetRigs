/*========================================
        import dependencies
========================================*/
import { useState } from "react";
import * as usersServices from "../../utilities/users-service.js"
import { logOut } from '../../utilities/users-service'

export default function UserProfileEdit({ user, setUser, setEditState }) {

    const [editCredentials, setEditCredentials] = useState({
        name: user.name,
        email: user.email,
        img: "",
    });



    function handleDeleteAccount() {
        usersServices.remove()
        logOut()
        setUser(null)
    }

    const handleUpdateClick = () => {
        // Update the users info doing a findOneAndUpdate({email: req.user.email}, {however we would pass this in.})
        setEditState(false)
    }

    function handleChange(evt) {
        setEditCredentials({ ...editCredentials, [evt.target.name]: evt.target.value });
    }
    return (
        <div className="user-profile-edit">
            <form action="">

                {/* display user profile img */}
                <div className="user-profile-img">
                </div>
                <div className="user-profile-info">
                    <h3>Profile Picture URL</h3>
                    <input name="picture" Value={user.picture} onChange={handleChange}></input>
                    {/* display user name */}
                    <h3>Name</h3>
                    <input name="name" Value={user.name} onChange={handleChange}></input>
                    {/* display user email */}
                    <h3>Email</h3>
                    <input name="email " value={user.email} onChange={handleChange}></input>
                    {/* edit button for account */}
                    {/* When edit is clicked, change state to edit mode, show save button, when page is left without saving change back to out of edit mode */}
                    <div className="profile-edit-btns">
                        <button className="update-account-btn" onClick={handleUpdateClick}>Update profile</button>
                        <button className="delete-account-btn" onClick={handleDeleteAccount}>Delete profile</button>
                    </div>
                </div>
            </form>
        </div>
    )
}