const React = require('react');
const { Component } = require('react');

const Filter = require('./Filter');
const FilteredFruitList = require('./FilteredFruitList.js');

function FruitBasket(props){
  return(
    <div className="fruit-basket">
      <Filter fetchFilters={props.fetchFilters} handleChange={props.handleFilterChange} filters={props.filters} />
      <FilteredFruitList fruit={props.fruit} selectedFilter={props.selectedFilter} />
    </div>
  )
}

FruitBasket.defaultProps = {
  fruit: [],
  filters: [],
  currentFilter: null,
  updateFilterCallback: ""
}

module.exports = FruitBasket;
