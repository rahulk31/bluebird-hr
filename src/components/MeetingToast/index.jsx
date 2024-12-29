import styles from "./index.module.scss";

const MeetingToast = ({ key, duration, timeOrDay, name, description }) => {
  return (
    <div className={styles.meetingToastContainer} key={key}>
      <div className={styles.timeOrDate}>{timeOrDay}</div>
      <div className={styles.details}>
        <p>
          <span>{name}</span>
          {description} <span>{duration}</span>
        </p>
      </div>
    </div>
  );
};

export default MeetingToast;
