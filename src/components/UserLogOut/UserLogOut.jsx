/*========================================
        import dependencies
========================================*/
import { logOut } from '../../utilities/users-service'
/*========================================
        import css
========================================*/


export default function UserLogOut({ user, setUser }) {
  function handleLogOut(){
    logOut()
    setUser(null)
  }

  return (
    <div className="UserLogOut">
  
      <button className="nav-btn border-sides" onClick={handleLogOut}>LOG OUT</button>
    </div>
  )
}