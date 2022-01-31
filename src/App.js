import react, { Component } from "react";
import "./App.css";
import Sign from "./Sign";
import axios from "axios";
import Dashboard from "./Dashboard";

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
    axios.get("http://localhost:3000/users").then((response) => {
      this.setState({ users: response.data, dashboard: true, userN: userName });
    });
  };

  componentDidMount = () => {
    axios.get("http://localhost:3000/users").then((response) => {
      this.setState({ users: response.data });
    });
    axios.get("http://localhost:3000/channels").then((response) => {
      this.setState({ channels: response.data });
    });
    axios.get("http://localhost:3000/tags").then((response) => {
      this.setState({ tags: response.data });
    });
    axios.get("http://localhost:3000/regions").then((response) => {
      this.setState({ regions: response.data });
    });
  };

  render() {
    return (
      <>
        {this.state.dashboard ? (
          <Dashboard users={this.state.users} userN={this.state.userN}/>
        ) : (
          <div className="signup_login container">
            <Sign logedIn={this.loginsuccessfull} />
          </div>
        )}
      </>
    );
  }
}
export default App;
