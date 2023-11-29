import FriendListItem from 'components/FriendListItem/FriendListItem';
import FriendListCss from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={FriendListCss.friendList}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem
          avatar={avatar}
          name={name}
          isOnline={isOnline}
          key={id}
        />
      ))}
    </ul>
  );
};
export default FriendList;
