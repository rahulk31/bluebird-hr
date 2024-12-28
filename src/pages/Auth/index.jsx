import AuthContainer from "../../containers/AuthContainer";
import styles from "./index.module.scss";

const Auth = () => {
  return (
    <div className={styles.authContainer}>
      <AuthContainer />
    </div>
  );
};

export default Auth;
