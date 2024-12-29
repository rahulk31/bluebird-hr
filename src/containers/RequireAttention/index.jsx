import { FaBagShopping } from "react-icons/fa6";
import { requireAttentionData } from "../../data";
import styles from "./index.module.scss";

const RequireAttention = () => {
  return (
    <div className={styles.requireAttentionContainer}>
      <h1>Require Attention</h1>
      <nav>
        <ul>
          <li>Jobs</li>
          <li>Candidates</li>
          <li>Onboarding</li>
        </ul>
      </nav>
      <section>
        <table>
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th>Positions Left</th>
              <th>Applications</th>
              <th>Interviewed</th>
              <th>Rejected</th>
              <th>Feedback Pending</th>
            </tr>
          </thead>
          <tbody>
            {requireAttentionData.map((data) => (
              <tr key={data.id}>
                <td>
                  <FaBagShopping fill="#fff" className={styles.tableIcon} />
                </td>
                <td>{data.position}</td>
                <td>{data.positionsLeft}</td>
                <td>{data.applications}</td>
                <td>{data.interviewed}</td>
                <td>{data.rejected}</td>
                <td>{data.feedbackPending}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default RequireAttention;
