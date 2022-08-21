import DataContext from "../Data/DataContext";
import React from "react";
import { useContext } from "react";

const ReportComponent=()=>{
    const {Income, Outcome} = useContext(DataContext)
    return(
        <div>
            <p>Income :   {Income}</p>
            <p>Outcome:  {Outcome}</p>
        </div>
    );
}

export default ReportComponent;