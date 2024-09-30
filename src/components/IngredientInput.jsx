import React from "react";

export default function IngredientInput(props) {
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
                placeholder="Кількість в грамах"
                onChange={(event) => {props.onChange(event)}}
            />
            {
                props.result > 0 ?
                (<h4>{props.result.toFixed(2)}</h4>) 
                : null
            } 
        </div>
    )
}