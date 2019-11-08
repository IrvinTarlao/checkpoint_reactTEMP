import React, { Component } from "react";
import axios from 'axios'
import Game from './Game'

class Gamelist extends Component {
    constructor(props) {
		super(props);
        this.state = {
            games: [],
        }
        // console.log(this.state.games.data[5].name)
    }

    componentDidMount = () => {
        axios
      .get("https://wild-games.herokuapp.com/api/v1")
      .then(response => {
        this.setState({ games: response.data});
        console.log(this.state.games)
      })
    }

    displayGames = () => {
        const {games} = this.state
        const gamelist = games.map(item =>
            <Game
                id={item.id}
                name={item.name}
                rating={item.rating}
                image={item.background_image}
             />)
        return gamelist
    }

    render() {
        const containerstyle = {
            display: "flex",
            flexWrap: "wrap",
            color: "grey",
            fontSize: "20px",
            width: "100vw",
            // border: "2px solid red"
        };

        return (
            <div style={containerstyle}>
                {this.displayGames()}
            </div>
            
        )
    }
}

export default Gamelist