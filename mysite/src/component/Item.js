import React from "react"
import PropTypes from 'prop-types'; // ES6
import './Item.css'
const Item = (pros) => {
    const {title, amount} = pros
    const status = amount < 0 ? "Outcome":"Income"
    const symbol = amount < 0 ? "":"+"
    return(
        <li className={status} > {title} <span>__</span> <span><span>{symbol}</span> {amount}</span> </li>
    );
}

Item.propTypes={
    title:PropTypes.string.isRequired,
    amount:PropTypes.number.isRequired,
}
export default Item;