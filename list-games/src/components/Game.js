import React, { Component } from "react";

class Game extends Component {
    constructor(props) {
		super(props);
        this.state = {
        }
        // console.log(this.game.name)
    }

    
    render() {
        

        const divstyle = {
            color: "grey",
            fontSize: "15px",
            width: "300px",
            height: "350px",
            // border: "2px solid blue",
            background: "lightgrey",
            margin: "10px",
            paddingTop: "20px",
        };

        const imgstyle = {
            width: "auto",
            maxWidth: "300px",
            maxHeight: "150px",
            marginTop: "20px",
        };

        const buttonstyle = {
            width: "150px",
            height: "40px",
            marginTop: "20px",
        };

        return (
            <div>
                <div style={divstyle}>
                    <div >id : {this.props.id}</div>
                    <div>name : {this.props.name}</div>
                    <div>rating : {this.props.rating}</div>
                    <img style={imgstyle} src={this.props.image}/>
                    <div>
                        <button style={buttonstyle} onClick={() => this.props.delete(this.props.id)}>DELETE</button>
                    </div>                    
                </div>
            </div>
           
        )
    }
}

export default Game