import Header from "../../components/Header";
import Overview from "../../containers/Overview";
import Sidebar from "../../components/Sidebar";
import RequireAttention from "../../containers/RequireAttention";
import Calendar from "../../containers/Calendar";
import styles from "./index.module.scss";

const Dashboard = () => {
  return (
    <div className={styles.dashboardContainer}>
      <nav>
        <Sidebar />
      </nav>
      <header>
        <Header />
      </header>
      <div className={styles.mainContent}>
        <div>
          <Overview />
          <RequireAttention />
        </div>
        <aside>
          <Calendar />
        </aside>
      </div>
    </div>
  );
};

export default Dashboard;
