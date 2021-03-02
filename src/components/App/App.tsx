import React from 'react';
import NutritionList from '../NutritionList/NutritionList';
import {Dessert} from '../../models/models';
import './App.css';

const d = [{dessert: "Oreo",nutritionInfo: {calories: 437,fat: 18, carb: 63,   protein: 5 }},
            {dessert: "Nougat",nutritionInfo: {calories: 438,fat: 19, carb: 64,   protein: 4, }}]

type MyState = {
  desserts: Dessert[];  
};

class App extends React.Component<{}, MyState> {
  constructor(props: any){
    super(props)
    this.state = {
      desserts: d
    }
  }
  sort = (name:string) => {
    const {desserts} = this.state;
    const sortedDesserts = desserts.sort((a:any, b:any) => {
      return a.nutritionInfo[name] - b.nutritionInfo[name] ;   
    });
    this.setState({desserts: sortedDesserts})
  };
  addDessert = (newDessert: Dessert) => {
    const {desserts} = this.state;
    let newDesserts :Dessert[] = [...desserts, newDessert];
    this.setState({desserts: newDesserts})
  };
  deleteDessert = (dessert: Dessert) => {
    const {desserts} = this.state;
    const updatedDesserts = desserts.filter( x=> x! === dessert);
    this.setState({desserts: updatedDesserts})
  };
  resetDesserts = () =>{
    // updateDesserts(d);
  }
  render(){
    const {desserts} = this.state;
    return (
      <div className="App">
        <NutritionList 
          desserts={desserts} 
          addDessert={this.addDessert}
          removeDessert={this.deleteDessert}
          sort={this.sort}
          reset={this.resetDesserts}
        />
      </div>
    );
  }
  
}

export default App;
