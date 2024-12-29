import {
  Logo,
  Home,
  InactiveJobs,
  InactiveCandidates,
  InactiveCalendar,
  InactiveReports,
} from "../../assets";
import styles from "./index.module.scss";

const Sidebar = () => {
  return (
    <div className={styles.sidebarContainer}>
      <ul>
        <li>
          <div>
            <img src={Logo} alt="logo" />
          </div>
        </li>
        <li>
          <div>
            <img src={Home} alt="home" />
            <span>Home</span>
          </div>
        </li>
        <li>
          <div>
            <img src={InactiveJobs} alt="jobs" />
            <span>Jobs</span>
          </div>
        </li>
        <li>
          <div>
            <img src={InactiveCandidates} alt="canidates" />
            <span>Candidates</span>
          </div>
        </li>
        <li>
          <div>
            <img src={InactiveReports} alt="reports" />
            <span>Reports</span>
          </div>
        </li>
        <li>
          <div>
            <img src={InactiveCalendar} alt="calendar" />
            <span>Calendar</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
