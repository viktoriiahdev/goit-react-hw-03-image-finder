import React from 'react';
import PropTypes from 'prop-types';

import Header from './Searchbar.styled';
import Form from './SearchForm.styled';

class Searchbar extends React.Component {
  state = {
    query: '',
  };

  handleChange = e => {
    this.setState({ query: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.query);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({
      query: '',
    });
  };

  render() {
    return (
      <Header className="Searchbar">
        <Form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
            value={this.state.query}
          />
        </Form>
      </Header>
    );
  }
}

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
