"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./register.module.scss";
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa6";

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div>
      <form>
        <div className={styles.container}>
          <div className={styles.left}>
            <div className={styles.leftContainer}>
              <Link href={"/"}>
                <div className={styles.backgroundImg}></div>
              </Link>
            </div>
            <img src="/img/login.png" alt="" />
          </div>
          <div className={styles.right}>
            <span>Sign up</span>
            <div className={styles.wrapper}>
              <div className={styles.first}>
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Enter username here"
                  required
                />
              </div>
              <div className={styles.second}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter email here"
                  required
                />
              </div>
              <div className={styles.third}>
                <label htmlFor="password">Password</label>
                <div className={styles.passwordContainer}>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    placeholder="Enter password here"
                    required
                    className={styles.passwordInput}
                  />

                  <span
                    onClick={togglePasswordVisibility}
                    className={styles.icon}
                  >
                    {showPassword ? <IoEyeSharp /> : <FaEyeSlash />}
                  </span>
                </div>
              </div>
            </div>
            <button>Create Account</button>
            <p className={styles.login}>
              Already have an account? <Link href={"/login"}>Sign in</Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
