import React, { Component } from 'react';

import './App.css';
import FilterableProductTable from './containers/FilterableProductTable/FilterableProductTable';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FilterableProductTable />
      </div>
    );
  }
}

export default App;
