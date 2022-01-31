import react, { Component } from "react";
import axios from "axios";

class Createchannels extends Component {
  constructor() {
    super();
    this.state = {
      tagsReviced: false,
      tags: [],
      tagsSelected: [],
      usersDropDown: [],
      name: "",
      listOfUsers: [],
      posts: [],
      creator: "",
      noOfPosts: 0,
      timeStamps: "",
      error: false,
      created: false
    };
  }

  componentDidMount = () => {
    let users = this.props.users.filter((user, i) => {
      return user.username != this.props.userN;
    });
    axios.get("http://localhost:3000/allTags").then((response) => {
      this.setState({
        tags: response.data,
        tagsReviced: true,
        usersDropDown: users,
        tagsSelected: []
      });
    });
  };

  nameChange = (e) => {
    this.setState({
      name: e.target.value
    });
  };

  addToTags = (e) => {
    if (e.target.checked) {
      this.setState({
        tagsSelected: [...this.state.tagsSelected, e.target.value]
      });
    } else {
      let temp = this.state.tagsSelected.filter((tag, i) => {
        return tag != e.target.value;
      });
      this.setState({
        tagsSelected: temp
      });
    }
  };

  addToUsers = (e) => {
    if (e.target.checked) {
      this.setState({
        listOfUsers: [...this.state.listOfUsers, e.target.value]
      });
    } else {
      let temp = this.state.listOfUsers.filter((user, i) => {
        return user != e.target.value;
      });
      this.setState({
        listOfUsers: temp
      });
    }
  };
  allInfo = () => {
    console.log("is it?");
    if (
      this.state.tagsSelected.length &&
      this.state.listOfUsers.length &&
      this.state.name != ""
    ) {
      console.log("can be pushed");
      this.setState({
        created: true
      });
    } else {
      this.setState({
        error: true
      });
    }
  };
  cresC = () => {
    this.setState({
      created: false
    });
  };
  render() {
    return (
      <>
        {this.state.created ? (
          <>
            <div className="container pc">
              <div className="row inpc">
                <div className="col crea">CREATED!!!</div>
              </div>
              <div className="row">
                <div className="col">
                  <button className="sbut btn" onClick={this.cresC}>
                    create channel
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="container pc">
            <div className="row inpc">
              <label className="col">Name:</label>
              <input
                className="col"
                type="text"
                value={this.state.name}
                onChange={this.nameChange}
              />
            </div>
            <div className="row inpc">
              <label className="col">tags:</label>
              <div className="col tags">
                {this.state.tagsReviced ? (
                  this.state.tags.map((tags, index) => (
                    <div>
                      <input
                        type="checkbox"
                        value={tags}
                        onChange={this.addToTags}
                      />
                      {tags}
                    </div>
                  ))
                ) : (
                  <></>
                )}
              </div>
            </div>
            <div className="row inpc">
              <label className="col">Invite members:</label>
              <div className="col tags">
                {this.state.usersDropDown.map((user, index) => (
                  <div>
                    <input
                      type="checkbox"
                      value={user.username}
                      onChange={this.addToUsers}
                    />
                    {user.username}
                  </div>
                ))}
              </div>
            </div>
            {this.state.error ? (
              <div className="row">
                <div className="col er">Enter All fields</div>
              </div>
            ) : (
              <></>
            )}
            <div className="row">
              <div className="col">
                <button className="sbut btn" onClick={this.allInfo}>
                  submit
                </button>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}
export default Createchannels;
