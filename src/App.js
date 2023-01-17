import './App.css';
import React from 'react';
import Content from "./component/content/Content"

class App extends React.Component {

  render(){
    return (
      <div className="App">
        <Content children="Hello Bryan"/>
      </div>
    );
  }
  }

export default App;
