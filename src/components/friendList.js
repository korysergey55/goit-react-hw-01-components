import React from 'react';

const FriendList = ({friends}) => {
    return (
        <ul class="friend-list">
            {friends.map((friend) => (
                <li class="item" key={friend.id}>
                    <span class="status">{friend.isOnline}</span>
                    <img class="avatar" src={friend.avatar} alt="" width="48" />
                    <p class="name">{friend.name}</p>
            </li>
            ))}
        </ul>
    )
}
export default FriendList;