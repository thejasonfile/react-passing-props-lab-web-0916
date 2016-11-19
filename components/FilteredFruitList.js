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

// class FilteredFruitList extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       items: []
//     };
//   }

//   componentWillMount() {
//     fetch('/api/fruit')
//       .then(res => res.json())
//       .then(fruit => this.setState({ items: fruit}));
//   }

//   render() {
//     const list = !this.props.filter ? this.state.items :
//       this.state.items.filter(i => i.fruit_type == this.props.filter);

//     return (
//       <ul className="fruit-list">
//         {list.map((i,idx) => <li key={idx}>{i.char}</li>)}
//       </ul>
//     );
//   }
// }

module.exports = FilteredFruitList;

