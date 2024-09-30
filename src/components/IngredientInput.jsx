import React from "react";
import trash from '../assets/trash.svg'

export default function IngredientInput(props) {
    function handleClick(event) {
        event.preventDefault()
        props.onDelete()
    }

    return (
        <div className="ingredient-input">
            {props.number}
            <select name="ingredients">
                {
                    props.products.map(
                        (product, index) => <option value={product} key={index}>{product}</option>
                    )
                }
            </select>
            <input 
                type="number" 
                name="amount" 
                className="ingredients-container-input"
                placeholder="Грамів"
                onChange={(event) => {props.onChange(event)}}
            />
            {
                props.result > 0 ?
                (<h4>{props.result.toFixed(2)}</h4>) 
                : null
            } 
            <input type="image" src={trash} className="btn-remove-ingredient" onClick={handleClick}/>
        </div>
    )
}