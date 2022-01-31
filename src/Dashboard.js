import react, { Component } from "react";
import axios from "axios";
import "./dashboard.css";
import Dash from "./Dash.js";
import Profile from "./Profile.js";
import Yourchannels from "./Yourchannels";
import Createchannels from "./Createchannels";
import prI from './user.png';
import dasI from './dashboard.png';
import edI from './edit.png';
import tV from './broadcast.png';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      dash: true,
      profile: false,
      channels: false,
      creatChannel: false,
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
            class="btn btn-lg btn-block"
            onClick={this.dashboardButton}
          ><img src={dasI} className="sI" alt="Logo" />
              Dashboard
          </button>
          <br></br>
          <button
            type="button"
            class="btn btn-lg btn-block"
            onClick={this.profileButton}
          ><img src={prI} className="sIs" alt="Logo" />
            Profile
          </button>
          <br></br>
          <button
            type="button"
            class="btn btn-lg btn-block"
            onClick={this.yourchannelsButton}
          ><img src={tV} className="sI" alt="Logo" />
            Your channels
          </button>
          <br></br>
          <button
            type="button"
            class="btn btn-lg btn-block"
            onClick={this.creatChannelButton}
          ><img src={edI} className="sIs" alt="Logo" />
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
            <Yourchannels users={this.props.users} userN={this.props.userN} />
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
