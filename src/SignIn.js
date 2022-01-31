import react, { Component } from "react";
import axios from "axios";
import Data from "./db.json";

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      users: [],
      usernameDoesNotExist: false,
      incorrectPassword: false
    };
  }

  username = (e) => {
    this.setState({
      username: e.target.value
    });
  };

  password = (e) => {
    this.setState({ password: e.target.value });
  };

  componentDidMount = () => {
    this.setState({ users: Data.users });
  };

  checkdetails = () => {
    let i,
      usersLength = this.state.users.length,
      userNoExist = false,
      passwordWrong = false,
      userExist = false;
    for (i = 0; i < usersLength; i++) {
      if (this.state.username == this.state.users[i].username) {
        userExist = true;
        if (this.state.password != this.state.users[i].password) {
          passwordWrong = true;
        }
        break;
      }
    }
    if (!userExist) {
      userNoExist = true;
    }
    this.setState(
      {
        usernameDoesNotExist: userNoExist,
        incorrectPassword: passwordWrong
      },
      () => {
        if (!this.state.usernameDoesNotExist && !this.state.incorrectPassword) {
          this.props.logedIn(this.state.username);
        }
      }
    );
  };
  render() {
    return (
      <div className="sign_up_div">
        <div className="row frow">
          <label className="col">Username:</label>
          <input
            className="col"
            type="text"
            value={this.state.username}
            onChange={this.username}
          />
        </div>
        {this.state.usernameDoesNotExist ? (
          <div className="row">
            <div className="col"></div>
            <div className="errorMessage col">Username does not exist</div>
          </div>
        ) : (
          <></>
        )}
        <div className="row frow">
          <label className="col">Password:</label>
          <input
            className="col"
            type="password"
            value={this.state.password}
            onChange={this.password}
          />
        </div>
        {this.state.incorrectPassword ? (
          <div className="row">
            <div className="col"></div>
            <div className="errorMessage col">incorrectPassword</div>
          </div>
        ) : (
          <></>
        )}
        <div className="row">
          <div className="col">
            <button className="sbut btn" onClick={this.checkdetails}>
              submit
            </button>
          </div>
          <div className="col">
            <button className="sbut btn" onClick={this.props.back}>
              back
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default SignIn;
