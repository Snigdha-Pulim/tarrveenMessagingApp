import react, { Component } from "react";

class Dash extends Component {
  constructor() {
    super();
  }

  componentDidMount = () => {};

  render() {
    return (
      <div className="container daC">
        <div className="row">
          <div className="col">
            <div className="boxD">Trending Users</div>
          </div>
          <div className="col">
            <div className="boxD">Trending Region</div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="boxD">Trending Tags</div>
          </div>
          <div className="col">
            <div className="boxD">Trending Channel</div>
          </div>
        </div>
      </div>
    );
  }
}
export default Dash;
