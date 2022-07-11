/*========================================
        import dependencies
========================================*/

/*========================================
        import css
========================================*/
import "./UserProfilePage.css"

export default function UserProfilePage({ user }) {

    return (

        <div className="profilePage-wrapper">
            <div className="profilePage-div">
                {/* display user profile img */}
                <div className="user-profile-img">
                </div>
                <div className="user-profile-info">
                    {/* display user name */}
                    <h3>Name</h3>
                    <p>{user.name}</p>
                    {/* display user email */}
                    <h3>Email</h3>
                    <p>{user.email}</p>
                    {/* edit button for account */}
                    {/* When edit is clicked, change state to edit mode, show save button, when page is left without saving change back to out of edit mode */}
                    <button className="edit-account-btn">Edit profile</button>
                </div>
            </div>
        </div>
    )

}