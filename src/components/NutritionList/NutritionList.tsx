import React from 'react';
import './NutritionList.css';
import {Dessert} from '../../models/models';
import Form from'../Form/Form';

type MyProps = {
    desserts: Dessert[];
    addDessert: (obj: Dessert) => void;
    removeDessert: (obj: Dessert) => void;
    sort: (name: string) => void;
    reset: (name: string) => void;
  };
type MyState = {
    sortBy: string; // like this
    sortColumn: string;
    openWindow: boolean;
};

const headers = [
    'Dessert',
    'Calories',
    'Fat',
    'Carb',
    'protein'
]

class NutritionList extends React.Component<MyProps,MyState>{
    constructor(props: any){
        super(props);
    }
    sort = (name:string) => {
        this.props.sort(name.toLowerCase());
    }
    select = (id: number) =>{

    }
    addItem = (item: Dessert) =>{
        this.props.addDessert(item);
    }
    showForm = () =>{
        this.setState({openWindow: true})
    }
    getHeaders = () =>{

    }
    open = () =>{

    }
    render(){
        const {desserts} = this.props;
        const {openWindow} = this.state;
        return(
            <div className="nutrition-list center pa4">
                {openWindow && <Form 
                    addData={this.addItem}
                />}

                <div className="header-block">
                    <h3 className="inline-block fl-left"> Nutrition List </h3>
                    <div className="inline-block fl-right">
                        <button className="f6 link dim ph3 pv2 mb2 dib white bg-dark-green reset-btn">Reset</button>
                    </div>
                </div>
                <div className="command-block">
                    <div className="selected-block inline-block fl-left">
                        0 selected
                    </div>
                    <div className="selected-block inline-block fl-right">
                        <button className="f6 link dim ph3 pv2 mb2 dib white bg-dark-green reset-btn" onClick={this.showForm}>Add Item</button>
                        <button className="f6 link dim ph3 pv2 mb2 dib white bg-dark-green reset-btn">Delete</button>
                    </div>
                </div>
                <div className="">
                    <div className="overflow-auto">
                        <table className="f6 w-100 mw8 center" cellSpacing="0">
                            <thead>
                                <tr>
                                <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">
                                    <input className="pv3 pr3 bb b--black-20" type="checkbox" />
                                </th>
                                {/* <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white" onClick={(e) => this.sort('Dessert')}>Dessert</th> */}
                                {headers.map((header) =>
                                    <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white" onClick={(e) => this.sort(header)}>{header}</th>
                                )}
                                </tr>
                            </thead>
                            <tbody className="lh-copy">
                                {desserts.length > 0 && desserts.map((dessert) =>
                                    <tr>
                                        <td className="pv3 pr3 bb b--black-20"><input type="checkbox" /></td>
                                        <td className="pv3 pr3 bb b--black-20">{dessert?.dessert}</td>
                                        <td className="pv3 pr3 bb b--black-20">{dessert?.nutritionInfo?.calories}</td>
                                        <td className="pv3 pr3 bb b--black-20">{dessert?.nutritionInfo?.fat}</td>
                                        <td className="pv3 pr3 bb b--black-20">{dessert?.nutritionInfo?.carb}</td>
                                        <td className="pv3 pr3 bb b--black-20">{dessert?.nutritionInfo?.protein}</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }

}

export default NutritionList;