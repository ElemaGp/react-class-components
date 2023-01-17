import React from "react";

export default class Content extends React.Component {

    state={
        name: "IK",
        id: 200
    }

    changeName = () => {
        this.setState({
            name: "James",
            id: 5
          })  
        }

        
    

    render(){
        console.log(this.state)

        return(
            <div>
                {this.props.children}
              <div>
                {this.state.name}
              </div>
              <button onClick={this.changeName}>Change state</button>
            </div>
        )
    }
}

