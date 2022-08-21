import React from "react";
import './App.css';
import './component/FormComponent.css';
import FormComponent from "./component/FormComponent";
import Transaction from "./component/Transcation";
import { useState, useEffect } from "react";
import DataContext from "./Data/DataContext";
import ReportComponent from "./component/ReportComponent";

function App() {
  const Design = {color:"red", textAlign:'center'}
  // const initdata =[
  //   {id:1, title:"Hospital Expense", amount:700},
  //   {id:2, title:"Bus Fee", amount:700},
  // ] 
  const [Item, setItem] = useState([])
  const [ReportIncome, setReportIncome] = useState(0)
  const [ReportOutcome, setReportOutcome] = useState(0)
  const onAddNewItem = (newItem) =>{
    setItem((prevousItem)=>{
      return [newItem,...prevousItem]
    })
  }
  useEffect(()=>{
    const amounts = Item.map(items=>items.amount)
    const Income = amounts.filter(element=> element > 0).reduce((Total,element)=>Total+=element,0)
    const Outcome = amounts.filter(element=> element < 0).reduce((Total,element)=>Total+=element,0)

    setReportIncome(Income)
    setReportOutcome(Outcome)
  }, [Item, ReportIncome, ReportOutcome])
  return (
    <DataContext.Provider value={
      {
        Income: ReportIncome,
        Outcome: ReportOutcome
      }
    }>
      <div className="container">
        <h1 style={Design}>Program income - outcome</h1>
        <ReportComponent/>
        <FormComponent onAddItem={onAddNewItem}/>
        <Transaction item={Item}/>
      </div>
    </DataContext.Provider>
  );
}

export default App;