import React, {useState} from 'react';
import NutritionList from '../NutritionList/NutritionList';
import {Dessert} from '../../models/models';
import './App.css';

const d = [{dessert: "Oreo",nutritionInfo: {calories: 437,fat: 18, carb: 63,   protein: 5 }},
            {dessert: "Nougat",nutritionInfo: {calories: 438,fat: 19, carb: 64,   protein: 4, }}]

function App() {
  const [desserts, updateDesserts] = useState(d);

  const sort = (name:string) => {
    console.log('hitting prop')
    const sortedDesserts = desserts.sort((a:any, b:any) => {
      return a.nutritionInfo[name] - b.nutritionInfo[name] ;   
    });
    console.log('sorted dessertes', sortedDesserts);
    updateDesserts(sortedDesserts);
  };
  const addDessert = (newDessert: Dessert) => {
    let newDesserts :Dessert[] = [...desserts, newDessert];
    updateDesserts(newDesserts);
  };
  const deleteDessert = (dessert: Dessert) => {
    const updatedDesserts = desserts.filter( x=> x! === dessert);
    updateDesserts(updatedDesserts);
  };
  const resetDesserts = () =>{
    updateDesserts(d);
  }
  return (
    <div className="App">
      <NutritionList 
        desserts={desserts} 
        addDessert={() =>{}}
        removeDessert={() =>{}}
        sort={sort}
        reset={resetDesserts}
      />
    </div>
  );
}

export default App;
