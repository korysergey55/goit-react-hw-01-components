import React from 'react';
import styles from "./Profile.module.css";
import PropTypes from "prop-types";

const Profile = ({ name, tag, location, avatar, stats }) => {
 return (
  <div className={styles.profile}>
   <div className={styles.description}>
    <img className={styles.img_avatar} src={avatar} alt="Аватар пользователя" />
    <p className={styles.user_name}>{name}</p>
    <p className={styles.tag}>{tag}</p>
    <p className={styles.location}>{location}</p>
   </div>

   <ul className={styles.stats}>
    <li className={styles.list}>
     <span className="label">Followers </span>
     <span className={styles.quantity}>{stats.followers}</span>
    </li>
    <li className={styles.list}>
     <span className="label">Views </span>
     <span className={styles.quantity}>{stats.views}</span>
    </li>
    <li className={styles.list}>
     <span className="label">Likes </span>
     <span className={styles.quantity}>{stats.likes}</span>
    </li>
   </ul>
  </div>
 );
};

Profile.defaultProps = {
 avatar: "https://www.flaticon.com/svg/static/icons/svg/3784/3784184.svg",
 name: "User Name",
};

Profile.prototype = {
 name: PropTypes.string.isRequired,
 tag: PropTypes.string,
 location: PropTypes.string.isRequired,
 avatar: PropTypes.string,
 stats: PropTypes.string,
};
export default Profile;