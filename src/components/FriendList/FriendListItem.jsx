import styles from "./FriendListItem.module.css";

<div>
  <img src="" alt="Avatar" width="48" />
  <p>Friend name</p>
  <p>Friend status</p>
</div>;

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={styles.friendItem}>
      <img src={avatar} alt="Avatar" width="48" className={styles.avatar} />
      <p className={styles.name}>{name}</p>
      <p className={isOnline ? styles.online : styles.offline}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;
