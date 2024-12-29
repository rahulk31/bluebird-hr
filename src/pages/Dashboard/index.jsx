import Header from "../../components/Header";
import Overview from "../../containers/Overview";
import Sidebar from "../../components/Sidebar";
import styles from "./index.module.scss";
import RequireAttention from "../../containers/RequireAttention";

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
        <aside>aside</aside>
      </div>
    </div>
  );
};

export default Dashboard;
