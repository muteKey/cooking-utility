import { useState } from 'react'
import IngredientInput from './components/IngredientInput'
import MainParametersForm from './components/MainParametersForm'
import products from './products'
import { nanoid } from 'nanoid'

function App() {
  const [ingredients, setIngredients] = useState([])
  const [coefficient, setCoefficient] = useState(0)

  function handleAddIngredient(event) {
    event.preventDefault()
    setIngredients(prevIngredients => [...prevIngredients, {id: nanoid(), products, result: 0}])
  }

  function handleCoefficient(coef) {
    setCoefficient(coef)
  }

  function handleIngredientChange(ingredient, value) {
    setIngredients(prevIngredients => prevIngredients.map(el => {
      return (el.id === ingredient.id) ? {
        ...el,
        result: value * coefficient
      } : el
    }))
  }

  function handleDelete(ingredient) {
    setIngredients(ingredients => ingredients.filter(el => el.id !== ingredient.id))
  }

  return (
    <>
      <header>
        <h1>Cooking Calculator</h1>
      </header>
      <main>
        <MainParametersForm handleCoefficient={handleCoefficient}/>
        {
          coefficient > 0 ? (
            <>
              <h4>Коефіціент {coefficient.toFixed(2)}</h4> 
              <div className='ingredients-container'>
              <p>Інгредієнти</p>
              {
                ingredients.map((ingredient, index) => 
                  <IngredientInput 
                    key={index} 
                    number={index + 1} 
                    products={ingredient.products} 
                    result={ingredient.result}
                    onChange={(event) => {
                        const value = Number(event.target.value)
                        handleIngredientChange(ingredient, value)
                      } 
                    }
                    onDelete={ () => { handleDelete(ingredient) } }
                  />
                )
              }
            </div>
      
            <button className='btn-add-ingredient' onClick={handleAddIngredient}>
              Додати інгредієнт
            </button>
            </>
          ) : null
        }
      </main>
    </>
  )
}

export default App