import {
  AddIcon,
  Overview1,
  Overview2,
  Overview3,
  Overview4,
  Overview5,
  Overview6,
  Overview7,
  Overview8,
} from "../../assets";
import OverviewCard from "../OverviewCard";
import styles from "./index.module.scss";

const overviewCardData = [
  { id: 1, stats: 33, cardName: "Interview Scheduled", cardImage: Overview1 },
  {
    id: 2,
    stats: 2,
    cardName: "Interview Feedback Pending",
    cardImage: Overview2,
  },
  { id: 3, stats: 44, cardName: "Approval Pending", cardImage: Overview3 },
  {
    id: 4,
    stats: 13,
    cardName: "Offer Acceptance Pending",
    cardImage: Overview4,
  },
  {
    id: 5,
    stats: 17,
    cardName: "Documentations Pending",
    cardImage: Overview5,
  },
  { id: 6, stats: 3, cardName: "Training Pending", cardImage: Overview6 },
  {
    id: 7,
    stats: 5,
    cardName: "Supervisor Allocation Pending",
    cardImage: Overview7,
  },
  {
    id: 8,
    stats: 56,
    cardName: "Project Allocation Pending",
    cardImage: Overview8,
  },
];

const Overview = () => {
  return (
    <div className={styles.overviewContainer}>
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
