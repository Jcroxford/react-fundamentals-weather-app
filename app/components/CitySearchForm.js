import React, {Component} from 'react';
import Router, {Link, withRouter} from 'react-router-dom';
import api from '../utils/api';

class CitySearchForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            location: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            location: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    submitSearch(location) {
      this.props.history.push({
        pathname: '/forecast',
        search:  `?city=${location}`
      })
    }

    render() {
        const location = this.state.location;

        return(
            <form 
                className="zipcode-container" 
                style={{flexDirection: this.props.flexDir}}
                onSubmit={this.handleSubmit}
            >
                <input
                    className="form-control"
                    type="text"
                    placeholder="St. George, UT"
                    value={this.state.value}
                    onChange={this.handleChange}
                    onKeyPress={(e) => (
                      e.key === "Enter" ? this.submitSearch(location) : null
                    )}
                    required
                />
                <button
                    type="submit"
                    className="btn btn-success"
                    style={{margin: 10}}
                    onClick={(e) => this.submitSearch(location)}
                >
                    Get Weather
                </button>
            </form>
        );
    }
}

module.exports = withRouter(CitySearchForm);