import React from 'react';
import {Dessert} from '../../models/models';

import './Form.css';

type MyProps = {
    addData: (obj: Dessert) => void;
  };
type MyState = {
    name: string;
    calories: string;
    fat: string;
    carbs: string;
    protein: string;
};

class Form extends React.Component<MyProps,MyState>{
    constructor(props:any){
        super(props);
    }
    render(){
        return(
            <div className="form">
                <article className="pa4 black-80">
                    <form action="sign-up_submit" method="get" accept-charset="utf-8">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="ph0 mh0 fw6 clip">Sign Up</legend>
                            <div className="mt3">
                                <label className="db fw4 lh-copy f6" >Dessert Name*</label>
                                <input className="pa2 input-reset ba bg-transparent w-100 measure" type="email" name="email-address"  id="email-address"/>
                            </div>
                            <div className="mt3">
                                <label className="db fw4 lh-copy f6" >Calories*</label>
                                <input className="pa2 input-reset ba bg-transparent w-100 measure" type="email" name="email-address"  id="email-address"/>
                            </div>
                            <div className="mt3">
                                <label className="db fw4 lh-copy f6" >Fat*</label>
                                <input className="pa2 input-reset ba bg-transparent w-100 measure" type="email" name="email-address"  id="email-address"/>
                            </div>
                            <div className="mt3">
                                <label className="db fw4 lh-copy f6" >Carbs*</label>
                                <input className="pa2 input-reset ba bg-transparent w-100 measure" type="email" name="email-address"  id="email-address"/>
                            </div>
                            <div className="mt3">
                                <label className="db fw4 lh-copy f6" >Protein*</label>
                                <input className="pa2 input-reset ba bg-transparent w-100 measure" type="email" name="email-address"  id="email-address"/>
                            </div>
                            <div className="mt3">
                                <label className="db fw4 lh-copy f6">Submit</label>
                                <button>Submit</button>
                            </div>
                        </fieldset>
                    </form>
                </article>
            </div>
        );
    }
}

export default Form;