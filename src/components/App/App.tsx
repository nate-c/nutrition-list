import React  from 'react';
import NutritionList from '../NutritionList/NutritionList';
import {Dessert} from '../../models/models';
import { gql, useQuery } from '@apollo/client';
import {getAllDessertsQuery} from '../../graphQL/queries';
import './App.css';
import { useEffect, useState } from 'react';

const d = [{id: 1, dessert: "Oreo",nutritionInfo: {calories: 437,fat: 18, carb: 63,   protein: 5 }},
            {id: 2, dessert: "Nougat",nutritionInfo: {calories: 438,fat: 19, carb: 64,   protein: 4, }}]


function App(){// extends React.Component<{}, MyState> {
  const [desserts, updateDesserts] = useState(d);
  useEffect(() => { 
      // execute side effect
        // const { error, data } = useQuery(
        //    getAllDessertsQuery
        // );
  });

  const sort = (name:string) => {
    const sortedDesserts = desserts.sort((a:any, b:any) => {
      return a.nutritionInfo[name] - b.nutritionInfo[name] ;   
    });
    updateDesserts(sortedDesserts);
  };
  const addDessert = (newDessert: Dessert) => {
    let newDesserts :Dessert[] = [...desserts, newDessert];
    // const getAllDessertsQuery = gql`query getAllDesserts() {
    //                                       dessert {
    //                                         id,
    //                                         name,
    //                                         nutrition
    //                                       }
    //                                     }`;
    // const { loading, error, data } = useQuery(
    //    getAllDessertsQuery
    // );
    updateDesserts(newDesserts);
  };
  const deleteDessert = (ids: number[]) => {
    const updatedDesserts = desserts.filter( x=> !ids.includes(x.id));
    updateDesserts(updatedDesserts);
  };
  const resetDesserts = () =>{
    updateDesserts(d);
  }
  
    return (
      <div className="App">
        <NutritionList 
          desserts={desserts} 
          addDessert={addDessert}
          removeDessert={deleteDessert}
          sort={sort}
          reset={resetDesserts}
        />
      </div>
    );
  
  
}

export default App;
