import React, {Component} from 'react';

class Loading extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: 'Fetching Weather'

    }
  }

  componentDidMount() {
    const stopper = `Fetching Weather...`;
    this.interval = window.setInterval( function() {
      if (this.state.text === stopper) {
        this.setState( function() {
          return {
            text: 'Fetching Weather'
          }
        });
      } else {
        this.setState( function(prevState) {
          return {
            text: prevState.text + '.'
          }
        });
      }
    }.bind(this), 300);
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  render() {
    return ( 
      <p className="loadingText">
        {this.state.text}
      </p>
    )
  }
}

module.exports = Loading;