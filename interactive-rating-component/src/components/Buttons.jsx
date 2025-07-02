import './Buttons.css'

export function Buttons({selected, setSelected}){
    

    const rating = [1,2,3,4,5]
    

    const handleClick = (num) =>{
        setSelected(num)
        

  }

    return(
    <div className='btn-continer'>     
      {
        rating.map((num) => (
          <button
            key={num}
            className={selected === num ? 'rating-button selected' : 'rating-button'}
            onClick={() => handleClick(num)}
            


            >
            {num}
          </button>

        ))
      }
      
    </div>
    )
}