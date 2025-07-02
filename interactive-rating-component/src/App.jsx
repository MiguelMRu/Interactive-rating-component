import { useState } from 'react'
import './App.css'
import star from "./assets/icon-star.svg"
import { Thanks } from './components/Thanks'

function App() {
  
  const rating = [1,2,3,4,5]
  const [selected, setSelected] = useState()

  const selectClass = selected ? 'rating-button selected' : 'rating-button'

  const handleClick = (number) =>{
    setSelected(number)

  }
   

  return (
    

    <main>
      <div className='star-container'>
        <img src={star} alt="star icon" />
      </div>

      
      <h1>How did we do?</h1>

      <p>Please let us know how we did with your support request. All feedback is appreciated 
      to help us improve our offering!</p>


      <div>     
      {
        rating.map((num) => (
          <button
            key={num}
            className={selectClass}
            onClick={() => handleClick(num)}

            >
            {num}
          </button>

        ))
      }
      
    </div>

      <form >
      <button type="submit">SUBMIT</button>
      </form>

      {selected ? <Thanks rating={selected}/> : ''}

    </main>
  )
}

export default App
