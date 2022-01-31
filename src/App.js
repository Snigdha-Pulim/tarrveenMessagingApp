import react, { Component } from "react";
import "./App.css";
import Sign from "./Sign";
import axios from "axios";
import Dashboard from "./Dashboard";
import Data from "./db.json";
import logo from "./logo-1.png";

class App extends Component {
  constructor() {
    super();
    this.state = {
      signInUpValue: 0,
      dashboard: false,
      users: [],
      channels: [],
      regions: [],
      tags: [],
      userId: "",
      userN: ""
    };
  }

  loginsuccessfull = (userName) => {
    this.setState({ users: Data.users, dashboard: true, userN: userName });
  };

  componentDidMount = () => {
    this.setState({
      users: Data.users,
      channels: Data.channels,
      tags: Data.tags,
      regions: Data.regions
    });
  };

  render() {
    return (
      <>
        {this.state.dashboard ? (
          <Dashboard users={this.state.users} userN={this.state.userN} />
        ) : (
          <>
            <div className="logoOfPlace">
              <img src={logo} alt="Logo" />
            </div>
            <div className="signup_login container">
              <Sign logedIn={this.loginsuccessfull} />
            </div>
          </>
        )}
      </>
    );
  }
}
export default App;
