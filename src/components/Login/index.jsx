import styles from "./index.module.scss";
import EyeOff from "../../assets/eye-off.svg";

const Login = () => {
  return (
    <div className={styles.loginContainer}>
      <form>
        <div>
          <label className={styles.inputLabel} htmlFor="username">
            Username
          </label>
          <input type="text" id="username" />
        </div>
        <div>
          <label className={styles.inputLabel} htmlFor="password">
            Password
          </label>
          <input type="password" id="password" />
          <img src={EyeOff} alt="" />
        </div>
        <div className={styles.ctaStrip}>
          <div>
            <input type="checkbox" id="rememberMe" />
            <label htmlFor="rememberMe">Remember</label>
          </div>
          <p>Forgot Password?</p>
        </div>
      </form>
    </div>
  );
};

export default Login;
