import React, { Component } from "react";
import ShoeCard from "./components/ShoeCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import shoes from "./shoes.json";
import "./App.css";
import Counter from "./components/Counter";


console.log(Counter);

class App extends Component {
  // Setting this.state.shoes to the shoes json array
  state = {
    score: 0,
    shoes,
    clicks: 1,
    
  };


 
handleClick = id => {
  console.log(id);
//   Set this.state.shoes equal to the new shoes array
  let guessedCorrectly = false;
  const newShoe = this.state.shoes.map((item) => {
    const newItem = { ...item };
    if (newItem.id === id) {
      console.log("New Item ID: ", newItem.id);
      console.log("clicked: ", newItem.clicked);
      if (newItem.clicked === "false") {
        newItem.clicked = true;
        console.log("clicked: ", newItem.clicked);
        guessedCorrectly = true;
      }
    }
    return newItem;
  });
  console.log(guessedCorrectly);
  guessedCorrectly
    ? this.handleCorrectGuess(newShoe)
    : this.handleIncorrectGuess(newShoe);   

};

componentDidMount() {
  // console.log(this.state.shoes);
  this.setState({data: this.shuffleShoe(this.state.shoes) });
}

 shuffleShoe = data => {
  let i = data.length - 1;
  while (i > 0) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = data[i];
    data[i] = data[j];
    data[j] = temp;
    i--;
  }
  return data;
};


handleCorrectGuess = (data) => {
  const {score} = this.state;
  let newScore = score + 1;
  this.setState({
    score: newScore,
    shoes: this.shuffleShoe(data)
  })
};
handleIncorrectGuess = () => {
  // this.handleIncorrectGuess({incorrectGuess: this.state.guess.id})
  console.log("you got it wrong");
};



// handleIncrement = ()

 

// Map over this.state.shoes and render a ShoeCard component for each shoe object
render() {
  return (
    <Wrapper>
      <Title><img src="https://upload.wikimedia.org/wikipedia/en/thumb/e/e3/The_Smurfs_logo.svg/1200px-The_Smurfs_logo.svg.png" alt="Smurf's Logo"></img></Title>
      <h1>Score: {this.state.score}</h1>
      {this.state.shoes.map(shoe => (
        <ShoeCard
          filterShoe={this.filterShoe}
          id={shoe.id}
          key={shoe.id}
          name={shoe.name}
          image={shoe.image}
          occupation={shoe.occupation}
          location={shoe.location}
          handleClick={this.handleClick}
          
          
          
        />
      ))}
    </Wrapper>
  );
}
}

export default App;