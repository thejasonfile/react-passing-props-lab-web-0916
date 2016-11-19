const React = require('react');
const { Component } = require('react');

function Filter(props){
  return(
    <select onChange={props.handleChange} defaultValue='all'>
      <option value='all'>All</option>
        {props.filters.map(filter =>
      <option key={filter} value={filter}>{filter}</option>
        )}
    </select>
  )
}

Filter.defaultProps = {
  filters: [],
  handleChange: ""
}

module.exports = Filter;
