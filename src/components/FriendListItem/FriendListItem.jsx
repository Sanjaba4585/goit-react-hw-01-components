import css from './FriendListItem.module.css';

export const FriendListItem = ({ avatar, name, isOnLine }) => {
  return (
    <li className={css.item}>
      <span className={isOnLine ? css.status__true : css.status__false}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

export default FriendListItem;
