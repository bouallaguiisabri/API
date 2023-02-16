import axios from 'axios';
import React, {useState,useEffect} from 'react'
const ListOfUsers = ()=>{
const [ListOfUsers, setListOfUsers] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
            setListOfUsers(res.data)
            })
            .catch(err => {
            console.log(err)
        })
    },[])
return (
    <div id='app'>
        {ListOfUsers.map(user => (
            <div id='cards' key={user.id}>
                <p>{user.id}</p>
                <p>{user.email}</p>
            </div>
        ))}
    </div>
)
}

export default ListOfUsers
