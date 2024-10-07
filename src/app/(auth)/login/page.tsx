"use client";
import Link from "next/link";
import styles from "./login.module.scss";
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa6";
import { useState } from "react";
import { apiService } from "@/utils/api";
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [username, setUsername] = useState(''); // State to hold username input
  const [email, setEmail] = useState(''); // State to hold email input
  const [password, setPassword] = useState(''); // State to hold password input
  const [error, setError] = useState(''); // State to hold error messages
  const [loading, setLoading] = useState(false); // State to indicate loading status
  const router = useRouter();

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev); // Toggle the visibility of the password
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault(); // Prevent the default form submission

    setLoading(true); // Set loading state to true

    try {
      const response = await apiService.user.login({ username, email, password });
      console.log('response',response)
      if (response.id) {
        localStorage.setItem('token', response.token);
        localStorage.setItem('userId', response.id);
        router.replace('/');
      }
    } catch (err) {
      setError('Login failed. Please try again.'); // Set error message on failure
      console.error(err); // Log the error to the console
    } finally {
      setLoading(false); // Set loading state to false at the end of the request
    }
  };

  return (
    <form onSubmit={handleSubmit}> {/* Handle form submission */}
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.leftContainer}>
            <Link href={"/"}>
              <div className={styles.backgroundImg}></div> {/* Link to homepage with background image */}
            </Link>
          </div>
          <img src="/img/login.png" alt="" /> {/* Login image */}
        </div>
        <div className={styles.right}>
          <span>Sign In</span>
          {error && <p className={styles.error}>{error}</p>} {/* Display error message if exists */}
          <div className={styles.wrapper}>
            <div className={styles.first}>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter username here"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)} // Update username state on change
              />
            </div>
            <div className={styles.second}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter email here"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Update email state on change
              />
            </div>
            <div className={styles.third}>
              <label htmlFor="password">Password</label>
              <div className={styles.passwordContainer}>
                <input
                  type={showPassword ? "text" : "password"} // Show password if toggle is active
                  id="password"
                  name="password"
                  placeholder="Enter password here"
                  required
                  className={styles.passwordInput}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} // Update password state on change
                />
                <span
                  onClick={togglePasswordVisibility} // Toggle password visibility on click
                  className={styles.icon}
                >
                  {showPassword ? <IoEyeSharp /> : <FaEyeSlash />} {/* Show appropriate icon based on visibility state */}
                </span>
              </div>
            </div>
            <button type="submit" disabled={loading}> {/* Disable button while loading */}
              {loading ? 'Signing In...' : 'Sign In'} {/* Change button text based on loading state */}
            </button>
            <p>
              Don't have an account? <Link href={"/register"}> Sign up</Link> {/* Link to registration page */}
            </p>
          </div>
        </div>
      </div>
    </form>
  );
};

export default LoginPage;
