import s from "./Profile.module.css";

const Profile = ({ user }) => {
  return (
    <div className={s.wrapper}>
      <div>
        <img className={s.img} src={user.image} />
        <h2 className={s.fullname}>
          {user.firstName} {user.lastName}
        </h2>
        <p>Teg:{user.Teg}</p>
        <p>Location:{user.Location}</p>
      </div>
    </div>
  );
};

export default Profile;
