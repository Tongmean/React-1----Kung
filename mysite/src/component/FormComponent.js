import React from "react";
import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from "react";
//import PropTypes from 'prop-types'; // ES6

const FormComponent = (props) =>{
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState(0)
    const [FormValid, setFormValid] = useState(false)
    const inputTitle = (event) =>{
        setTitle(event.target.value)
    }
    const inputAmount = (event) =>{
        setAmount(event.target.value)
    }
    const saveItem = (event) =>{
        event.preventDefault()
        const itemData = {
            id:uuidv4(),
            title:title,
            amount:Number(amount)
        }
        // eslint-disable-next-line react/prop-types
        props.onAddItem(itemData)
        setTitle('')
        setAmount(0)

    }
    useEffect(() => {
        const CheckData = title.trim().length>0 && amount !==0
        if(CheckData){
            setFormValid(true)
        }
    },[title, amount])

    return(
        <div>
            <form onSubmit={saveItem}>
                <div className="form-control">
                    <label>What That ?</label>
                    <input type="text" placeholder="identify ur Problem" onChange={inputTitle} value={title}/>
                </div>
                <div className="form-control">
                    <label>Number of money</label>
                    <input type="number" placeholder="(+ income, - outcome)" onChange={inputAmount} value={amount}/>

                </div>
                <div>
                    <button className="btn" type="submit" disabled={!FormValid}>Save</button>
                </div>
            </form>
        </div>
    );
}


export default FormComponent;