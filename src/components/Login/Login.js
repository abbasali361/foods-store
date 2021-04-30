// import React, { useContext } from 'react';
// import firebase from "firebase/app";
// import "firebase/auth";
// import firebaseConfig from './firebase.config';
// // import { UserContext } from '../../App';
// import { useHistory, useLocation } from 'react-router-dom';
// import './Login.css';

// const Login = () => {
//     const [loggedInUser, setLoggedInUser] = useContext(UserContext);
//     const history = useHistory();
//     const location = useLocation();
//     const { from } = location.state || { from: { pathname: "/" } };

//     if (firebase.apps.length === 0) {
//         firebase.initializeApp(firebaseConfig);
//     }

//     const handleGoogleSignIn = () => {
//         var provider = new firebase.auth.GoogleAuthProvider();
//         firebase.auth().signInWithPopup(provider).then(function (result) {
//             const { displayName, email } = result.user;
//             const signedInUser = { name: displayName, email }
//             setLoggedInUser(signedInUser);
//             history.replace(from);
//             // ...
//         }).catch(function (error) {
//             const errorMessage = error.message;
//             console.log(errorMessage);
//         });
//     }
//     return (
//         <div className="login-button">
//             <h1>This is Login</h1>
//             <br/>
//             <button onClick={handleGoogleSignIn}>Google Sign in</button>
//         </div>
//     );
// };

// export default Login;



import React, { Component } from "react";
import { Form,Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";


export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Login
          </Button>
        </form>
      </div>
    );
  }
}
