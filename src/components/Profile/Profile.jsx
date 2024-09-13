import React from "react";
import s from "./Profile.module.css"


const Profile = ({ name, tag, location, image, stats }) => {
    return (
      <div className={s.container}>
        <div className={s.card}>
          <div className={s.userInfo}>
            <img src={image} alt="User avatar" className={s.avatar} />
            <h2 className={s.name}>{name}</h2>
            <p className={s.tag}>@{tag}</p>
            <p className={s.location}>{location}</p>
          </div>
          <ul className={s.stats}>
            <li>
              <span className={s.lable}>Followers:</span>
              <span className={s.quantity}>{stats.followers}</span>
            </li>
            <li>
              <span className={s.lable}>Views:</span>
              <span className={s.quantity}>{stats.views}</span>
            </li>
            <li>
              <span className={s.lable}>Likes:</span>
              <span className={s.quantity}>{stats.likes}</span>
            </li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default Profile;