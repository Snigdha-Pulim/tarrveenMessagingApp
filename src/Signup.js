import react, { Component } from "react";
import axios from "axios";

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      region: [],
      regionsC: false,
      username: "",
      regionSelected: "",
      regionSelVari: true,
      email: "",
      password: "",
      passwordC: "",
      wrongEmail: false,
      passwordDoesNotMatch: false,
      usernameNotEntered: false,
      regionNotSelected: false,
      usernameAlreadyExist: false,
      emailAlreadyExist: false,
      passwordNotEntered: false
    };
  }

  componentDidMount = () => {
    axios
      .post("https://countriesnow.space/api/v0.1/countries/cities", {
        country: "india"
      })
      .then((response) => {
        this.setState({ region: response.data.data, regionsC: true });
      });
  };

  username = (e) => {
    this.setState({
      username: e.target.value,
      usernameAlreadyExist: false,
      usernameNotEntered: false
    });
  };

  email = (e) => {
    this.setState({
      email: e.target.value,
      emailAlreadyExist: false,
      wrongEmail: false
    });
  };

  password = (e) => {
    this.setState({ password: e.target.value, passwordNotEntered: false });
  };

  password_check = (e) => {
    this.setState({ passwordC: e.target.value, passwordDoesNotMatch: false });
  };

  selected_region = (e) => {
    this.setState({
      regionSelected: e.target.value,
      regionNotSelected: false,
      regionSelVari: false
    });
  };

  allInfo = () => {
    let re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let weongE = false,
      userNotEnter = false,
      regionNotSel = false,
      passNotEnter = false,
      passDoesNotMatch = false;

    if (!re.test(this.state.email)) {
      weongE = true;
    }
    if (this.state.username == "") {
      userNotEnter = true;
      console.log("username empty");
    }
    if (this.state.regionSelVari) {
      regionNotSel = true;
      console.log("region empty");
    }
    if (this.state.password == "") {
      passNotEnter = true;
      console.log("password empty");
    }
    if (this.state.password != this.state.passwordC) {
      passDoesNotMatch = true;
      console.log("passwords do not match");
    }
    this.setState(
      {
        wrongEmail: weongE,
        usernameNotEntered: userNotEnter,
        regionNotSelected: regionNotSel,
        passwordNotEntered: passNotEnter,
        passwordDoesNotMatch: passDoesNotMatch
      },
      () => {
        if (
          !this.state.wrongEmail &&
          !this.state.usernameNotEntered &&
          !this.state.regionNotSelected &&
          !this.state.passwordNotEntered &&
          !this.state.passwordDoesNotMatch
        ) {
          this.sendingDataToAPI();
        }
      }
    );
  };
  sendingDataToAPI = () => {
    console.log("everything successful??");
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
        {this.state.usernameNotEntered ? (
          <div className="row">
            <div className="col"></div>
            <div className="errorMessage col">Please Enter the user name</div>
          </div>
        ) : (
          <></>
        )}
        {this.state.usernameAlreadyExist ? (
          <div className="row">
            <div className="col"></div>
            <div className="errorMessage col">Username already exists</div>
          </div>
        ) : (
          <></>
        )}
        <div className="row frow">
          <label className="col">Email:</label>
          <input
            className="col"
            type="email"
            value={this.state.email}
            onChange={this.email}
          />
        </div>
        {this.state.wrongEmail ? (
          <div className="row">
            <div className="col"></div>
            <div className="errorMessage col">Please enter a valid email</div>
          </div>
        ) : (
          <></>
        )}
        {this.state.emailAlreadyExist ? (
          <div className="row">
            <div className="col"></div>
            <div className="errorMessage col">Email already exits</div>
          </div>
        ) : (
          <></>
        )}
        <div className="row frow">
          <label className="col">Region:</label>
          <select
            name="cars"
            className="col"
            value={this.state.regionSelected}
            onChange={this.selected_region}
          >
            {this.state.regionsC ? (
              this.state.region.map((region, index) => (
                <option value={region}>{region}</option>
              ))
            ) : (
              <></>
            )}
          </select>
        </div>
        {this.state.regionNotSelected ? (
          <div className="row">
            <div className="col"></div>
            <div className="errorMessage col">Please select your region</div>
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
        {this.state.passwordNotEntered ? (
          <div className="row">
            <div className="col"></div>
            <div className="errorMessage col">please enter a password</div>
          </div>
        ) : (
          <></>
        )}
        <div className="row frow">
          <label className="col">Re-enter Password:</label>
          <input
            className="col"
            type="password"
            value={this.state.passwordC}
            onChange={this.password_check}
          />
        </div>
        {this.state.passwordDoesNotMatch ? (
          <div className="row">
            <div className="col"></div>
            <div className="errorMessage col">passwords do not match</div>
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
export default Signup;
