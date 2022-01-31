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
            <div className="boxD">
              <div className="hedboxD">Trending Users</div>
              not working at the movement
            </div>
          </div>
          <div className="col">
            <div className="boxD">
              <div className="hedboxD">Trending Region</div>
              not working at the movement
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="boxD">
              <div className="hedboxD">Trending Tags</div>
              not working at the movement
            </div>
          </div>
          <div className="col">
            <div className="boxD">
              <div className="hedboxD">Trending Channel</div>
              not working at the movement
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Dash;
