import { AddIcon } from "../../assets";
import { overviewCardData } from "../../data";
import OverviewCard from "../../components/OverviewCard";
import styles from "./index.module.scss";

const Overview = () => {
  return (
    <div className={styles.overviewContainer}>
      {/* Heading */}
      <section className={styles.top}>
        <h1>Overview</h1>
        <div className={styles.overviewCTAS}>
          <button>
            <img src={AddIcon} alt="Add Icon" />
            <span>Add Candidate</span>
          </button>
          <button>
            <img src={AddIcon} alt="Add Icon" />
            <span>Add Job</span>
          </button>
        </div>
      </section>

      {/* Cards */}
      <section className={styles.bottom}>
        {overviewCardData.map((card) => (
          <OverviewCard
            key={card.id}
            stats={card.stats}
            cardName={card.cardName}
            cardImage={card.cardImage}
          />
        ))}
      </section>
    </div>
  );
};

export default Overview;
