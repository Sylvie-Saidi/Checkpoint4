import { useEffect, useState } from 'react';
import axios from 'axios';
import { FETCH } from '../Fetch';

const UserList = () => {
    const [user, setUser] = useState([]);

    useEffect(() => {
        const fetchUser = () => {
            axios
            .get(`${FETCH}/user`)
            .then(res => setUser(res.data))
            
           
        }
        fetchUser();
      
    }, [])

    return (
        <div>
            <h2>Liste des utilisateurs</h2>
            {user.map((use) => (
                <div key={use.id}>
                    {use.name} {use.password}
                </div>
            ))}
        </div>
    )

}
export default UserList;