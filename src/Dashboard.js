import react, { Component } from "react";
import axios from "axios";
import "./dashboard.css";
import Dash from "./Dash.js";
import Profile from "./Profile.js";
import Yourchannels from "./Yourchannels";
import Createchannels from "./Createchannels";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      dash: true,
      profile: false,
      channels: false,
      creatChannel: false
    };
  }

  dashboardButton = () => {
    this.setState({
      dash: true,
      profile: false,
      channels: false,
      creatChannel: false
    });
  };

  profileButton = () => {
    this.setState({
      dash: false,
      profile: true,
      channels: false,
      creatChannel: false
    });
  };

  yourchannelsButton = () => {
    this.setState({
      dash: false,
      profile: false,
      channels: true,
      creatChannel: false
    });
  };

  creatChannelButton = () => {
    this.setState({
      dash: false,
      profile: false,
      channels: false,
      creatChannel: true
    });
  };

  componentDidMount = () => {};

  render() {
    return (
      <>
        <div className="col-3 navB">
          <button
            type="button"
            class="btn btn-secondary btn-lg btn-block"
            onClick={this.dashboardButton}
          >
            Dashboard
          </button>
          <br></br>
          <button
            type="button"
            class="btn btn-secondary btn-lg btn-block"
            onClick={this.profileButton}
          >
            Profile
          </button>
          <br></br>
          <button
            type="button"
            class="btn btn-secondary btn-lg btn-block"
            onClick={this.yourchannelsButton}
          >
            Your channels
          </button>
          <br></br>
          <button
            type="button"
            class="btn btn-secondary btn-lg btn-block"
            onClick={this.creatChannelButton}
          >
            Create channel
          </button>
          <br></br>
        </div>
        <div className="col-9 rest">
          {this.state.dash ? (
            <Dash users={this.props.users}/>
          ) : this.state.profile ? (
            <Profile users={this.props.users} userN={this.props.userN}/>
          ) : this.state.channels ? (
            <Yourchannels users={this.props.users} userN={this.props.userN}/>
          ) : this.state.creatChannel ? (
            <Createchannels users={this.props.users} userN={this.props.userN}/>
          ) : (
            <></>
          )}
        </div>
      </>
    );
  }
}
export default Dashboard;
