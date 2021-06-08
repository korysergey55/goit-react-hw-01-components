import React from 'react';
import styles from './FrendsList.module.css';

const FriendList = ({friends}) => {
    return (
     <ul className={styles.friend_list}>
      {friends.map((friend) => (
       <li className={styles.item} key={friend.id}>
        <span
         className={friend.isOnline ? styles.status : styles.status_ofline}
        >
         {friend.isOnline}
        </span>
        <img className={styles.avatar} src={friend.avatar} alt="" width="48" />
        <p className={styles.name}>{friend.name}</p>
       </li>
      ))}
     </ul>
    );
}
export default FriendList;