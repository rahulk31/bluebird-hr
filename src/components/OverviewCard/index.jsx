import styles from "./index.module.scss";

const OverviewCard = ({ stats, cardName, cardImage }) => {
  return (
    <div className={styles.overviewCardContainer}>
      <div className={styles.overviewCard}>
        <div className={styles.overlay}>
          <span>{stats}</span>
        </div>
        <p>{cardName}</p>
        <img src={cardImage} />
      </div>
    </div>
  );
};

export default OverviewCard;
