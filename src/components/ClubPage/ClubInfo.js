import React, { Component } from "react";

class ClubInfo extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <h1>name of club {this.props.match.params.id}</h1>
        <h3>photo of club</h3>
        <p>some sort of info on the club</p>
      </div>
    );
  }
}

export default ClubInfo;
