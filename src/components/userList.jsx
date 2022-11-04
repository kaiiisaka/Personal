import React from 'react';
import User from "./user";

const UserList = ({users, title}) => {

    return (
        <div>
            <h2>{title}</h2>
            {users.map((user, index) =>
                <User number={index + 1} user={user} key={user.id}/>
            )}
        </div>
    );
};

export default UserList;