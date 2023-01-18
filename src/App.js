import './App.css';
import React from 'react';
import Content from "./component/content/Content"
import ClassUsingConstructor from './component/classUsingConstructor/ClassUsingConstructor';

class App extends React.Component {

  render(){
    return (
      <div className="App">
        {/* <Content children="Hello Bryan"/> */}
        <ClassUsingConstructor car = "Honda"/>
      </div>
    );
  }
  }

export default App;
