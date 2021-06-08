import React from 'react';
import styles from "./Profile.module.css";

const Profile = ({props}) => {
    return (
     <div className={styles.profile}>
      <div className={styles.description}>
       <img
        className={styles.img_avatar}
        src={props.avatar}
        alt="Аватар пользователя"
       />
       <p className={styles.user_name}>{props.name}</p>
       <p className={styles.tag}>{props.tag}</p>
       <p className={styles.location}>{props.location}</p>
      </div>

      <ul className={styles.stats}>
       <li className={styles.list}>
        <span class="label">Followers </span>
        <span className={styles.quantity}>{props.stats.followers}</span>
       </li>
       <li className={styles.list}>
        <span class="label">Views </span>
        <span className={styles.quantity}>{props.stats.views}</span>
       </li>
       <li className={styles.list}>
        <span class="label">Likes </span>
        <span className={styles.quantity}>{props.stats.likes}</span>
       </li>
      </ul>
     </div>
    );
}
export default Profile;