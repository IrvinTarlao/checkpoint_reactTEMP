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
        const gamelist = games.map((item, index) =>
            <Game
                id={index}
                name={item.name}
                rating={item.rating}
                image={item.background_image}
                delete={this.deleteGame}
                filter={this.filter}
             />)
        return gamelist
    }

    deleteGame = (id) => {
        console.log(id)
        const {games} = this.state
        const deletedGame = games.splice(id, 1)
        console.log(deletedGame)
        this.setState({
            games: games
        }) 
    }

    filter = () => {
        const {games} = this.state
        const filteredArray = games.filter(item => item.rating >= 4.5)
        console.log(filteredArray)
        this.setState({
            games: filteredArray
        }) 
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
            <div>
                <div>
                    <button onClick={() => this.filter()}>Best games</button>
                </div>

                <div style={containerstyle}>
                    {this.displayGames()}
                </div>
            </div>
            
        )
    }
}

export default Gamelist