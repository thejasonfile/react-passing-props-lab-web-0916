const React = require('react');
const FruitBasket = require('./FruitBasket');

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      filters: [],
      selectedFilter: null,
      items: []
    }

    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.fetchFilters = this.fetchFilters.bind(this);
  }
    
  handleFilterChange(e) {
    console.log('new filter: ', e.target.value);
    this.setState({ selectedFilter: e.target.value });
  }

  fetchFilters() {
    fetch('/api/fruit_types')
      .then(res => res.json())
      .then(filters => this.setState({filters: filters}));
  }

  fetchFruit(){
    fetch('/api/fruit')
      .then(res => res.json())
      .then(fruit => this.setState({ items: fruit}));
  }

  componentWillMount() {
    this.fetchFilters();
    this.fetchFruit();
  }

  render(){
    return(
      <FruitBasket filters={this.state.filters} 
                  selectedFilter={this.state.selectedFilter} 
                  items={this.state.items} 
                  handleFilterChange={this.handleFilterChange} 
                  fetchFilters={this.fetchFilters} />
    )
  }
}

// const App = () => {
//   return (
//     <FruitBasket />
//   );
// }

module.exports = App;
