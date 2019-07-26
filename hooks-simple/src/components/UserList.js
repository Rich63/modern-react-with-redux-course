import React from 'react';
import useResources from "./useResources";


const UserList = () => {
  const users = useResources('users')
  return (
    <ul>
      { users.map(user => 
        <li key={ user.id }>
          { user.name } { user.email }
        </li>
      ) }
    </ul>
  );
}

export default UserList;