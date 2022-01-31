import react, { Component } from "react";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      region: "",
      channels: [],
      totaleNoOfPost: 0
    };
  }

  componentDidMount = () => {
    let i,
      length = this.props.users.length;
    for (i = 0; i < length; i++) {
      if (this.props.users[i].username == this.props.userN) {
        this.setState({
          username: this.props.users[i].username,
          email: this.props.users[i].email,
          region: this.props.users[i].region,
          channels: this.props.users[i].channels,
          totaleNoOfPost: this.props.users[i].totalNoOfPost
        });
        break;
      }
    }
  };

  render() {
    return (
      <div className="container pc">
        <div className="container">
          <div className="row inpc">
            <div className="col">Username</div>
            <div className="col">{this.state.username}</div>
          </div>
          <div className="row inpc">
            <div className="col">Email</div>
            <div className="col">{this.state.email}</div>
          </div>
          <div className="row inpc">
            <div className="col">Region</div>
            <div className="col">{this.state.region}</div>
          </div>
          <div className="row inpc">
            <div className="col">channels</div>
            <div className="col chanboxinpc">
              <ul>
                {this.state.channels.length ? (
                  this.state.channels.map((channel, index) => (
                    <li>{channel.name}</li>
                  ))
                ) : (
                  <></>
                )}
              </ul>
            </div>
          </div>
          <div className="row inpc">
            <div className="col">TotalNoOFPost</div>
            <div className="col">{this.state.totaleNoOfPost}</div>
          </div>
        </div>
      </div>
    );
  }
}
export default Profile;
