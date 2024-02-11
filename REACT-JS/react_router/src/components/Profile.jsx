import { useAuth } from "./auth"
import {useNavigate} from 'react-router-dom'

export const Profile = () => {
  const auth = useAuth()
  const navigate = useNavigate()

  const handlelogout = () =>{
    auth.logout()
    navigate('/')
  }

  return(
    <div>
      welcome {auth.user}
      <button onClick={handlelogout}>logout</button>
    </div>
  )

}