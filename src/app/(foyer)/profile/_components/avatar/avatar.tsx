import styles from './avatar.module.scss'

export const Avatar = () => {
  return (
    <div className={styles['profile-avatar']}>
      <img src="/img/avatar.png" alt="avatar" />
      <div>
        <p>Masum Rana</p>
      </div>
      <div>
        <img src="/img/Vector.svg" alt="Location Icon" />
        <p>Gothenburg</p>
        <img src="/img/fe_birthday-cake.svg" alt="Birthday Icon" />
        <p>15th February</p>
      </div>
    </div>
  );
};
