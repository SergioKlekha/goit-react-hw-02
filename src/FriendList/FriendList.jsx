

import FriendListItem from "../FriendsListItem/FriendsListItem";
import s from "./FriendList.module.css";

const FriendList = ({ friends }) => {
  return (
    <ul className={s.friendsList}>
      {friends.map((friend) => (
        <li key={friend.id} className={s.friendsListItem}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;