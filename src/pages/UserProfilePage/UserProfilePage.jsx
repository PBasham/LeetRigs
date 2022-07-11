/*========================================
        import dependencies
========================================*/
import { useState, useEffect } from "react"
import UserProfileInfo from "../../components/UserProfileInfo/UserProfileInfo"
import UserProfileEdit from "../../components/UserProfileEdit/UserProfileEdit"
/*========================================
        import css
========================================*/
import "./UserProfilePage.css"

export default function UserProfilePage({ user, setUser, toggleActiveNavBtn }) {

    useEffect(() => {
        toggleActiveNavBtn(4)
    }, [])
    
    const [editState, setEditState] = useState(false)


    return (

        <div className="profilePage-wrapper">
            <div className="profilePage-div">
                 {!editState ? <UserProfileInfo user={user} setEditState={setEditState} /> : <UserProfileEdit user={user} setUser={setUser} setEditState={setEditState}/>}
            </div>
        </div>
    )

}