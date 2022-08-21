//import { v4 as uuidv4 } from 'uuid';
import React from "react";
import Item from "./Item";
import './Transactio.css'
const Transaction = (pros) =>{
   const {item} = pros
    return (
        <div>
            <ul className="item-list">
                {item.map((Element)=>{
                    return <Item title={Element.title} amount={Element.amount} key={Element.id}/>
                })}
            </ul>
        </div>


    );
}


export default Transaction;