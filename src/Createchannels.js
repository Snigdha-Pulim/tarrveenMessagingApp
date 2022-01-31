import react, { Component } from "react";
import axios from "axios";
import Data from "./db.json";

class Createchannels extends Component {
  constructor() {
    super();
    this.state = {
      tagsReviced: false,
      tags: [],
      tagsSelected: [],
      allTagsSelected: [],
      usersDropDown: [],
      name: "",
      listOfUsers: [],
      posts: [],
      creator: "",
      noOfPosts: 0,
      error: false,
      created: false,
      forId: 0
    };
  }

  componentDidMount = () => {
    let users = this.props.users.filter((user, i) => {
      return user.username != this.props.userN;
    });
    this.setState({
      tags: Data.allTags,
      tagsReviced: true,
      usersDropDown: users,
      tagsSelected: [],
      allTagsSelected: Data.tags,
      forId: Data.channels.length
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

  addTagsToTheTagsDatabase = () => {
    let i,
      k,
      j,
      toCheck = false;
    for (i = 0; i < this.state.tagsSelected.length; i++) {
      for (j = 0; j < this.state.allTagsSelected.length; j++) {
        if (this.state.tagsSelected[i] == this.state.allTagsSelected[j].name) {
          toCheck = true;
          for (k = 0; k < Data.tags; k++) {
            if (Data.tags[k].id == this.state.allTagsSelected[j].id) {
              Data.tags[k].count = Data.tags[k].count + 1;
            }
          }
          break;
        }
      }
      if (!toCheck) {
        Data.tags = [
          ...Data.tags,
          {
            name: this.state.tagsSelected[i],
            count: 1
          }
        ];
        toCheck = false;
      }
    }
  };

  addChennelToUsers = () => {
    this.setState({
      listOfUsers: [...this.state.listOfUsers, this.props.userN]
    });
    let i, j, k;
    for (i = 0; i < this.state.listOfUsers.length; i++) {
      for (j = 0; j < this.props.users.length; j++) {
        if (this.state.listOfUsers[i] == this.props.users[j].username) {
          for (k = 0; k < Data.users.length; k++) {
            if (Data.users[k].id == this.props.users[j].id) {
              Data.users[k].channels = [
                ...Data.users[k].channels,
                {
                  name: this.state.name,
                  noOfPostBySelf: 0,
                  id: this.state.forId + 1
                }
              ];
            }
          }
        }
      }
    }
  };

  allInfo = () => {
    if (
      this.state.tagsSelected.length &&
      this.state.listOfUsers.length &&
      this.state.name != ""
    ) {
      var timeDate = new Date();
      var todayDate =
        timeDate.getDate() +
        "/" +
        timeDate.getMonth() +
        1 +
        "/" +
        timeDate.getFullYear();
      var timeAtCreation =
        timeDate.getHours() +
        ":" +
        timeDate.getMinutes() +
        ":" +
        timeDate.getSeconds();
      Data.channels = [
        ...Data.channels,
        {
          name: this.state.name,
          tags: this.state.tagsSelected,
          listOfUsers: this.state.listOfUsers,
          post: this.state.posts,
          timeStamps: timeAtCreation + "    " + todayDate,
          createdBy: this.props.userN,
          noOfPosts: this.state.noOfPosts
        }
      ];
      this.addChennelToUsers();
      this.addTagsToTheTagsDatabase();
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
      tags: [],
      tagsSelected: [],
      name: "",
      listOfUsers: [],
      posts: [],
      creator: "",
      noOfPosts: 0,
      error: false,
      created: false,
      forId: 0
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
                    <input className="nTBu"
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
                <button className="sbut btn nTBu" onClick={this.allInfo}>
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
