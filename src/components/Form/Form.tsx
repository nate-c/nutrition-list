import React from 'react';
import {Dessert} from '../../models/models';

import './Form.css';

type MyProps = {
    addData: (obj: Dessert) => void;
    nextId: number;
  };
type MyState = {
    dessert: string;
    calories: number;
    fat: number;
    carbs: number;
    protein: number;
};

class Form extends React.Component<MyProps,MyState>{
    constructor(props:any){
        super(props);
        this.state = {
            dessert: '',
            calories: 0,
            fat: 0,
            carbs: 0,
            protein: 0
        }
    }
    update = (e: any, property:string) =>{
        const valAsNumber = Number(e.target.value);
        
        switch(property){
            case 'dessert':
                this.setState({dessert: e.target.value})
                break;
            case 'calories':
                if(isNaN(valAsNumber)){
                    return;
                }
                this.setState({calories: valAsNumber});
                break;
            case 'fat':
                if(isNaN(valAsNumber)){
                    return;
                }
                this.setState({fat: valAsNumber});
                break;
            case 'carbs':
                if(isNaN(valAsNumber)){
                    return;
                }
                this.setState({carbs: valAsNumber});
                break;
            case 'protein':
                if(isNaN(valAsNumber)){
                    return;
                }
                this.setState({protein: valAsNumber});
                break;
            default:                
                break;
        }
        // this.setState({`${name}`:correctedVal});
    }
    submitData = () => {
        const {dessert, calories, fat, carbs, protein} = this.state;
        const {nextId} = this.props;
        const newDessert = {
            id: nextId,
            dessert: dessert,
            nutritionInfo: {
                calories: calories,
                fat: fat,
                carb: carbs,
                protein: protein
            }
        }
        this.props.addData(newDessert);
    }
    render(){
        const {dessert, calories, fat, carbs, protein} = this.state;
        return(
            <div className="form">
                <article className="pa4 black-80">
                    <div accept-charset="utf-8">
                        <fieldset  className="ba b--transparent ph0 mh0">
                            <legend className="ph0 mh0 fw6 clip">Please fill all details before you submit</legend>
                            <div className="mt3">
                                <label className="db fw4 lh-copy f6" >Dessert Name*</label>
                                <input className="pa2 input-reset ba bg-transparent w-100 measure" type="text" onChange={(e) =>this.update(e,'dessert')} value={dessert} />
                            </div>
                            <div className="mt3">
                                <label className="db fw4 lh-copy f6" >Calories*</label>
                                <input className="pa2 input-reset ba bg-transparent w-100 measure" type="text" onChange={(e) =>this.update(e,'calories')} value={calories} />
                            </div>
                            <div className="mt3">
                                <label className="db fw4 lh-copy f6" >Fat*</label>
                                <input className="pa2 input-reset ba bg-transparent w-100 measure" type="text"  onChange={(e) =>this.update(e,'fat')} value={fat}  />
                            </div>
                            <div className="mt3">
                                <label className="db fw4 lh-copy f6" >Carbs*</label>
                                <input className="pa2 input-reset ba bg-transparent w-100 measure" type="text" onChange={(e) =>this.update(e,'carb')} value={carbs}   />
                            </div>
                            <div className="mt3">
                                <label className="db fw4 lh-copy f6" >Protein*</label>
                                <input className="pa2 input-reset ba bg-transparent w-100 measure" type="text" onChange={(e) =>this.update(e,'protein')} value={protein}   />
                            </div>
                            <div className="mt3">
                                <button onClick={this.submitData}>Submit</button>
                            </div>
                        </fieldset>
                    </div>
                </article>
            </div>
        );
    }
}

export default Form;