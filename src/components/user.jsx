import React from 'react';

const User = (props) => {
    return (
        <div className='user'>
            <div className='user--content'>
                <strong>{props.number}. {props.user.username}</strong>
                <p>{props.user.name}</p>
            </div>
        </div>
    );
};

export default User;