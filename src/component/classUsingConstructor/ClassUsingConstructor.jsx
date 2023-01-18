import React from "react";

export default class ClassUsingConstructor extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: "Vic",
            age: 17
        }

        this.changeName = this.changeName.bind(this)
    }

    changeName() {
        this.setState({
            name: "Collins",
            age: 28
        })
    }


    render(){

        return(
            <div className="classUsingConstructorContainer">
                <p>{this.state.name} has a {this.props.car}</p>
                <p>{this.state.age}</p>
                <button onClick={this.changeName}>Change Name</button>
            </div>
        )
    }
}