import { gql } from '@apollo/client';


export const getAllDessertsQuery = gql`query getAllDesserts() {
    dessert {
      id,
      name,
      nutrition
    }
  }`;

  export const updateDesserts = gql` 
    mutation updateDesserts($dessert: Dessert!) {
        desserts {
        }
      }
    )`;

  export const deleteDesserts = gql` 
    mutation deleteDesserts($dessert: Dessert!) {
        desserts {
        }
      }
    )`;