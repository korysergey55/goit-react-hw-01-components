import React from 'react';
import FriendListItem from "../friendListItem/FriendListItem";
import PropTypes from "prop-types";

const FriendList = ({friends}) => {
    return (
     <ul>
      <FriendListItem friends={friends} />
     </ul>
    );
}
FriendList.prototype = {
 friends: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default FriendList;