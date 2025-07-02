import { useState } from 'react'
import './App.css'
import star from "./assets/icon-star.svg"
import { Thanks } from './components/Thanks'
import { Buttons } from './components/Buttons'

function App() {
  const [submited, setSubmited] = useState(false)
  const [selected, setSelected] = useState(null)
  
  const rating = submited ? 'no-display' : 'rating'


   
  const handleSubmit = (e) =>{
    e.preventDefault()
    if(selected === null) return

    setSubmited(!submited)
    
  }

  return (
    <main >

      <section className={rating}>
      <div className='star-container'>
        <img src={star} alt="star icon" />
      </div>

      
      <h1>How did we do?</h1>

      <p>Please let us know how we did with your support request. All feedback is appreciated 
      to help us improve our offering!</p>

      <Buttons selected={selected} setSelected={setSelected}/>
      

      <form onSubmit={handleSubmit}>
      <button type="submit">SUBMIT</button>
      </form>
      </section>

      
      {submited ? <Thanks rating={selected}/> : ''}

    </main>

    
  )
}

export default App
