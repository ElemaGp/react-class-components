import React from "react";

export default class ClassUsingConstructor extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: "Vic",
            age: 17,
            link: ""
        }

        this.changeName = this.changeName.bind(this)
    }

    changeName(e) {
        this.setState({
            name: "Collins",
            age: 28,
            link: e.target.value
        })
    }


    render(){

        return(
            <div className="classUsingConstructorContainer">
                <p>{this.state.name} has a {this.props.car}</p>
                <p>{this.state.age}</p>
                <button onClick={this.changeName}>Change Name</button>
                <input type="textarea" value={this.state.link} onChange={this.changeName}/>
                <a href={`https://${this.state.link}`}>{this.state.link}</a>
            </div>
        )
    }
}