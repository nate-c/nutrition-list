import React from 'react';
import './NutritionList.css';
import {Dessert} from '../../models/models';
import Form from'../Form/Form';

type MyProps = {
    desserts: Dessert[];
    addDessert: (obj: Dessert) => void;
    removeDessert: (ids: number[]) => void;
    sort: (name: string) => void;
    reset: () => void;
  };
type MyState = {
    sortBy: string; // like this
    sortColumn: string;
    openWindow: boolean;
    selected: number[];
};

const headers = [
    'Dessert',
    'Calories',
    'Fat',
    'Carb',
    'Protein'
]

class NutritionList extends React.Component<MyProps,MyState>{
    constructor(props: any){
        super(props);
        this.state={
            sortBy: '',
            sortColumn: '',
            openWindow: false,
            selected: []
        }
    }
    sort = (name:string) => {
        this.props.sort(name.toLowerCase());
    }
    select = (id: number) =>{
        console.log('hitting select')
        const {selected} = this.state;
        let updatedSelectedArray = !selected.includes(id) ?
                           [...selected, id] :
                           selected.filter(x => x !== id);

        this.setState({selected: updatedSelectedArray});
    }
    addItem = (item: Dessert) =>{
        this.props.addDessert(item);
        this.setState({openWindow: false});
    }
    showForm = () =>{
        this.setState({openWindow: true})
    }
    toggleAll = ()=>{
        const {selected} = this.state;
        const {desserts} =this.props;
        let updatedSelected = selected.length !== desserts.length ? 
                                                    desserts.map((d) =>{
                                                        return d.id;
                                                    }) : 
                                                    [];
        this.setState({selected: updatedSelected})
    }
    resetTable = () => {
        this.setState({selected: []});
        this.props.reset();
    }
    delete = () =>{
        const {selected} = this.state;
        this.props.removeDessert(selected);
    }
    render(){
        const {desserts} = this.props;
        const {openWindow,selected} = this.state;
        return(
            <div className="nutrition-list center pa4">
                {openWindow && 
                    <Form 
                        addData={this.addItem}
                        nextId={desserts.length+1}
                    />}

                <div className="header-block w-100">
                    <h3 className="inline-block fl-left"> Nutrition List </h3>
                    <div className="inline-block fl-right">
                        <button className="f6 link dim ph3 pv2 mb2 dib white bg-dark-green reset-btn" onClick={(e) => this.resetTable()}>RESET DATA</button>
                    </div>
                </div>
                <div className="command-block w-100">
                    <div className="selected-block inline-block fl-left">
                        {selected.length} selected
                    </div>
                    <div className="selected-block inline-block fl-right mg-rt">
                        <button className="f6 link dim ph3 pv2 mb2 dib white bg-dark-green add-item-btn" onClick={this.showForm}>+ADD ITEM</button>
                        <button className="f6 link dim ph3 pv2 mb2 dib white bg-dark-green reset-btn" onClick={this.delete}>Delete</button>
                    </div>
                </div>
                <div className="n-list">
                    <div className="overflow-auto w-100">
                        <table className="f6 w-100 mw8 center" cellSpacing="0">
                            <thead>
                                <tr>
                                <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white tc">
                                    <input className="pv3 pr3 bb b--black-20" onChange={(e) => this.toggleAll()} type="checkbox" />
                                </th>
                                {headers.map((header) =>
                                    <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white tc" onClick={(e) => this.sort(header)}>{header}</th>
                                )}
                                </tr>
                            </thead>
                            <tbody className="lh-copy">
                                {desserts.length > 0 && desserts.map((dessert) =>
                                    <tr>
                                        <td className="pv3 pr3 bb b--black-20"><input type="checkbox" onChange={(e) => this.select(dessert.id)} checked={selected.includes(dessert.id)}/></td>
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