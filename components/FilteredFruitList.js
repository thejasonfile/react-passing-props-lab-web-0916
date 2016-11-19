const React = require('react');
const { Component } = require('react');

function FilteredFruitList(props){
  const list = !props.selectedFilter ? props.fruit :
    props.fruit.filter(i => i.fruit_type == props.selectedFilter);

  console.log(list)

  return(
    <ul className="fruit-list">
      {list.map((i,idx) => <li key={idx}>{i.char}</li>)}
    </ul>
  )
}

FilteredFruitList.defaultProps = {
  fruit: [],
  filter: ""
}

module.exports = FilteredFruitList;

