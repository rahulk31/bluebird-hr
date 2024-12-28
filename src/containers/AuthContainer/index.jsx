import { useState } from "react";
import styles from "./index.module.scss";
import Logo from "../../assets/logo.svg";
import AuthIllustration from "../../assets/authPageIllustration.svg";
import Login from "../../components/Login";
import Signup from "../../components/SignUp";

const AuthContainer = () => {
  const [showLogin, setShowLogin] = useState(true);
  const [activeForm, setActiveForm] = useState("login");
  return (
    <div className={styles.authContainer}>
      <header>
        <div>
          <img src={Logo} alt="logo" />
        </div>
        <h3>BlueBird HR</h3>
      </header>
      <section>
        <aside>
          <img src={AuthIllustration} alt="" />
        </aside>
        <main>
          <header>
            <p
              onClick={() => {
                setShowLogin(true);
                setActiveForm("login");
              }}
              className={activeForm === "login" && styles.active}
            >
              Login
            </p>
            <p
              onClick={() => {
                setShowLogin(false);
                setActiveForm("signup");
              }}
              className={activeForm === "signup" && styles.active}
            >
              Sign Up
            </p>
          </header>

          {showLogin ? <Login /> : <Signup />}

          <footer>
            <button>{showLogin ? "Login" : "Sign Up"}</button>
            <button>{showLogin ? "Login" : "Sign Up"} with Google</button>
          </footer>
        </main>
      </section>
    </div>
  );
};

export default AuthContainer;