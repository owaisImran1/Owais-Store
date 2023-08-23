import React, { useState, useContext } from 'react';
import '../App.css';
import { LoginContext } from '../Context/Login-Context/login-context';
import axios from 'axios';
import Cookies from 'js-cookie';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { state, dispatch } = useContext(LoginContext);

  const login = (e) => {
    e.preventDefault();

    // Simple validation to check if email and password are not empty
    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    setIsLoading(true);
    setError(null);

    const payload = { email, password };
    // Send the email and password to the server for signin
    axios
      .post("http://localhost:5000/api/users/signin", payload)
      .then((response) => {
        Cookies.set('token', response.data.token);
        dispatch({
          type: "LOGIN_USER",
          token: response.data.token,
        });
        windows.location.reload;
        setMessage(response.data.message);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.response?.data?.message);
        setIsLoading(false);
      });
  };

  return (
    <div className="container">
      {isLoading ? (
        <h4 className='alert alert-info text-center text-capitalize'>Signing in...</h4>
      ) : message ? (
        <h4 className='alert alert-success text-center text-capitalize'>{message}</h4>
      ) : error ? (
        <h4 className='alert alert-danger text-center text-capitalize'>{error}</h4>
      ) : null}
      <div className="login-box">
        <form>
          <div className="user-box">
            <input
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label>E-mail</label>
          </div>
          <div className="user-box">
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label>Password</label>
          </div>
          <center>
            <a href="#" onClick={login}>
              SUBMIT
              <span />
            </a>
          </center>
        </form>
      </div>
    </div>
  );
}
