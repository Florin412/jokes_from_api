import { Component } from "react";
import JokeCard from "../components/JokeCard";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      icon_url: "",
      id: "",
      url: "",
      value: ""
    };
  }

  componentDidMount() {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          icon_url: res.icon_url,
          id: res.id,
          url: res.url,
          value: res.value
        });
      })
      .catch((err) =>
        console.error("There was an error when fetching data from API")
      );
  }

  getNewJoke = () => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          icon_url: res.icon_url,
          id: res.id,
          url: res.url,
          value: res.value
        });
      })
      .catch((err) =>
        console.error("There was an error when fetching data from API")
      );
  };

  render() {
    return (
      <JokeCard
        icon_url={this.state.icon_url}
        id={this.state.id}
        joke={this.state.value}
        getNewJoke={this.getNewJoke}
      ></JokeCard>
    );
  }
}

export default App;
