import React from 'react'
import { useGlobalContext } from './context'
import phone from './images/phone.svg'

const Hero = () => {
  const { closeSubMenu } = useGlobalContext();
  return (
    <section className='hero' onMouseOver={closeSubMenu}>
      <article className="banner">
        <h3 className="title"><span>Payments</span> <span>infrastructure</span> <span>for the internet</span></h3>
        <p className="desc">Millions of companies of all sizes—from startups to Fortune 500s—use Stripe’s software and APIs to accept payments, send payouts, and manage their businesses online.</p>
        <button className="btn">Start Now</button>
      </article>
      <div className="img">
        <img src={phone} alt="phone" />
      </div>
    </section>
  )
}

export default Hero
