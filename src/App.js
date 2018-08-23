import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Instructions from './components/Instructions';
import {Main, IngredientCard} from './components/Game';
import ingredients from './ingredients.js';

class App extends Component {

  state = {
    //ingredients is imported from the json file and contains all of the ingredients
    ingredients,
    //selected ingredients is an array which will be filled with ids of the ingredients the player has clicked
    selectedIngredients: [],
    score: 0,
    topscore: 0,
    message: "Click an image to begin!"
  };

  shuffleArray (array) {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  //Function for when a user clicks an ingredient
  selectIngredient = (id,name) => {

    
  //If the ingredient has already been selected
  if (this.state.selectedIngredients.includes(id)) {
    this.setState({
      selectedIngredients: [],
      score: 0,
      message: `No, the nachos already have ${name}! Try again.`
    })

  } else { //If the ingredient has not yet been selected
    //Add the id of the ingredient to the array of selected ingredients
    this.setState({
      selectedIngredients: [...this.state.selectedIngredients, id],
      score: this.state.score + 1,
      message: `Added ${name}!`      
    })
    //If the current score is the best score, set the top score
    if (this.state.score > this.state.topscore) {
      this.setState({
        topscore: this.state.score
      })
    }
  }

    console.log(`this.selectedIngredients is `);
    console.log(this.state.selectedIngredients);
    console.log("Score is " + this.state.score);
    console.log("Top Score is " + this.state.topscore);

    const shuffledIngredients = this.shuffleArray(this.state.ingredients);
    console.log(shuffledIngredients);

  }

  render() {

    //Shuffle the ingredients prior to displaying them
    const shuffledIngredients = this.shuffleArray(this.state.ingredients);
    console.log(ingredients);

    //Only display 6 ingredients
    const firstSixIngredients = shuffledIngredients.slice(0,6);
   
    return (
      <div>
        <Navbar score={this.state.score} topscore={this.state.topscore} message={this.state.message}/>
        <Instructions />
        <Main>
          <div className="row">
              {firstSixIngredients.map(ingredient => (
                <IngredientCard
                id={ingredient.id}
                key={ingredient.id}
                name={ingredient.name}
                image={ingredient.image}
                selectIngredient={this.selectIngredient}
                />
              ))}
          </div>
        </Main>
      </div>
    );
  }
}

export default App;
