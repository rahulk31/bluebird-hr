import Header from "../../components/Header";
import Overview from "../../components/Overview";
import Sidebar from "../../components/Sidebar";
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
        </div>
        <aside>aside</aside>
      </div>
    </div>
  );
};

export default Dashboard;
