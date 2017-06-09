import React, {Component} from 'react';

class Detail extends Component {
  render() {
    console.log(this.props.location.state);
    return (
      <div>Details</div>
    )
  }
}

module.exports = Detail;