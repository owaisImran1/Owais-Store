import React, { useState } from 'react'; // Removed unnecessary imports
import axios from 'axios';
import SignIn from './SignIn'; // I assume you have defined this component

const Signup = () => {
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSignup = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    if (!email || !password || !username) {
      setErrorMessage('Please fill in all the fields.');
      return;
    }

    try {
      setIsLoading(true);
      // Make a POST request to the backend for user signup
      const response = await axios.post('http://localhost:5000/api/users/signup', {
        name: username,
        email: email,
        password: password,
      });

      // Handle success
      setSubmitted(true);
      setErrorMessage('');
      setIsLoading(false);
    } catch (error) {
      // Handle error
      console.error('Error signing up:', error);
      setErrorMessage('An error occurred.');
      setIsLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="container">
        <h4 className="alert alert-success text-center text-capitalize">Yay! Sign In Now.</h4>
        <SignIn />
      </div>
    );
  } else {
    return (
      <div className="container" id="form">
        {isLoading ? (
          <h4 className="alert alert-info text-center text-capitalize">Signing Up...</h4>
        ) : errorMessage ? (
          <h4 className="alert alert-danger text-center text-capitalize">{errorMessage}</h4>
        ) : null}
        <div className="login-box">
          <form> {/* Use onSubmit to trigger handleSignup */}
            <div className="user-box">
              <input type="text" name="username" required /> {/* Added "name" attribute */}
              <label>Name</label>
            </div>
            <div className="user-box">
              <input type="email" name="email" required /> {/* Added "name" attribute */}
              <label>Email</label>
            </div>
            <div className="user-box">
              <input type="password" name="password" required /> {/* Added "name" attribute */}
              <label>Password</label>
            </div>
            <center>
              <a href="#" onClick={handleSignup}>
                SUBMIT
                <span />
              </a>
            </center>
          </form>
        </div>
      </div>
    );
  }
};

export default Signup;
