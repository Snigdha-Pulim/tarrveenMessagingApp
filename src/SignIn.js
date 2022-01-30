import react, { Component } from "react";

class SignIn extends Component {
  render() {
      return <>In
      <button className="sbutton btn" onClick={this.props.back}>
            back
          </button>
      </>
  }
}
export default SignIn;