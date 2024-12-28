import styles from "./index.module.scss";
import EyeOff from "../../assets/eye-off.svg";

const Signup = () => {
  return (
    <div className={styles.signupContainer}>
      <form>
        <div>
          <label className={styles.inputLabel} htmlFor="firstName">
            First Name
          </label>
          <input type="text" id="firstName" />
        </div>
        <div>
          <label className={styles.inputLabel} htmlFor="lastName">
            Last Name
          </label>
          <input type="text" id="lastName" />
        </div>
        <div>
          <label className={styles.inputLabel} htmlFor="email">
            Email
          </label>
          <input type="email" id="email" />
        </div>
        <div>
          <label className={styles.inputLabel} htmlFor="password">
            Password
          </label>
          <input type="password" id="password" />
          <img src={EyeOff} alt="" />
        </div>
        <div>
          <label className={styles.inputLabel} htmlFor="confirmPassword">
            Re-enter Password
          </label>
          <input type="password" id="confirmPassword" />
          <img src={EyeOff} alt="" />
        </div>
      </form>
    </div>
  );
};

export default Signup;
