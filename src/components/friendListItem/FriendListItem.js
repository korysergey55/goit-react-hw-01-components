import React from 'react';
import styles from "./FriendListItem.module.css";
import PropTypes from "prop-types";

const FriendListItem = ({friends}) => {
    return (
     <>
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
     </>
    );
};

FriendListItem.prototype = {
 friends: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default FriendListItem;