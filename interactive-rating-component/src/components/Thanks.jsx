import illustration from "../assets/illustration-thank-you.svg"
import './Thanks.css'

export function Thanks({rating}){


    return(
    <section className="thanks">
        <img src={illustration} alt="Thanks for botting ilustration" />
        <span className="voted"><p>You selected {rating} out of 5</p></span>

        <h2>Thank you!</h2>

        <p>We appreciate you taking the time to give a rating. If you ever need more support, 
        don’t hesitate to get in touch!</p>
      </section>
    )
}