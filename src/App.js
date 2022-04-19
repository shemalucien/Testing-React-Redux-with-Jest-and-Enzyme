import React, { Component } from 'react';
import Header from './component/header';
import Headline from './component/headline';
import './app.scss';

const tempArr = [{
  fName: 'Joe',
  lName: 'Bloggs',
  email: 'joebloggs@gmail.com',
  age: 24,
  onlineStatus: true
}];

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="App" data-test="appComponent">
        <Header />
        <section className="main">
          <Headline header="Posts" desc="Click the button to render posts!" tempArr={tempArr} />

        </section>
      </div>
    );
  }
}


export default App;
