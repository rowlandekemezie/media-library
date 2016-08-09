import React, {Component} from 'react';
import '../styles/App.css';
import Header from '../common/Header';

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <Header />
        {this.props.children}
      </div>
    );
  }
}

export default App;
