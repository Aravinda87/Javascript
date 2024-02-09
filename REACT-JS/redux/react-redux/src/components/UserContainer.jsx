import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import { fetchUsers } from '../redux'

function UserContainer({userData,fetchUsers}) {

    useEffect(()=>{
        fetchUsers()
    },[])

  return userData.loading ? (
    <h1>loading</h1>
  ) : userData.error ? (
    <h1>{userData.error}</h1>
  ) : (
    <div>
        {
            userData && userData.users && userData.users.map(user => <p>{user.name}</p> )
        }
    </div>
  ) 
}

const mapstatetoprops = state =>{
    return {
        userData: state.user
    }
}

const mapdispatchtoprops = dispatch =>{
    return {
        fetchUsers : () => dispatch(fetchUsers())
    }
}

export default connect(
    mapstatetoprops,
    mapdispatchtoprops
)(UserContainer)