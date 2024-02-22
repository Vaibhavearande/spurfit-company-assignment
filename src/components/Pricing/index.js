import React from 'react'
import './index.css';

const Pricing = () => {
    return (
        <section id="pricing-plan">
            <div className="container">
            <div className="pricing_top">
                <h2 className="section_title">
                    Gym <span className="higthtlights">Pricing</span> Plan
                </h2>
                <p>
                One key characteristic of an option contract is the agreed upon price, known as the strike price or exercise price.
                 The strike price is the predetermined price at which you buy (in the case of a call) or you sell 
                 (in the case of a put) an underlying futures contract when the option is exercised.
                </p>
            </div>
            <div className='pricing_wrapper'>
                <div className='pricing_item' data-aos='fade-up'
                            data-aos-duration='2200'>
                    <div className='pricing_card_top'>
                        <h2 className='section_title'>Regular Member</h2>
                        <h2 className='pricing_section_title'>$100 <span>/month</span></h2>
                    </div>
                    <div className='services'>
                        <ul>
                            <li><span><i class="fa-regular fa-square-check"></i></span>Unlimited access to the gym</li>
                            <li><span><i class="fa-regular fa-square-check"></i></span>Customer support</li>
                            <li><span><i class="fa-regular fa-square-check"></i></span>Personal trainer</li>
                            <li><span><i class="fa-regular fa-square-check"></i></span>Standard options</li>
                            <li><span><i class="fa-regular fa-square-check"></i></span>4 classes per week</li>
                        </ul>
                        <button className='button'>Join Now</button>
                    </div>
                </div>

                <div className='pricing_item pricing_item-02' data-aos='fade-up'
                            data-aos-duration='2400'>
                    <div className='pricing_card_top'>
                        <h2 className='section_title'>Premium Member</h2>
                        <h2 className='pricing_section_title'>$150 <span>/month</span></h2>
                    </div>
                    <div className='services'>
                        <ul>
                            <li><span><i class="fa-regular fa-square-check"></i></span>Unlimited access to the gym</li>
                            <li><span><i class="fa-regular fa-square-check"></i></span>Customer support</li>
                            <li><span><i class="fa-regular fa-square-check"></i></span>Personal trainer</li>
                            <li><span><i class="fa-regular fa-square-check"></i></span>Standard options</li>
                            <li><span><i class="fa-regular fa-square-check"></i></span>4 classes per week</li>
                        </ul>
                        <button className='button'>Join Now</button>
                    </div>
                </div>


                <div className='pricing_item' data-aos='fade-up'
                            data-aos-duration='2600'>
                    <div className='pricing_card_top'>
                        <h2 className='section_title'>Standard Member</h2>
                        <h2 className='pricing_section_title'>$200 <span>/month</span></h2>
                    </div>
                    <div className='services'>
                        <ul>
                            <li><span><i class="fa-regular fa-square-check"></i></span>Unlimited access to the gym</li>
                            <li><span><i class="fa-regular fa-square-check"></i></span>Customer support</li>
                            <li><span><i class="fa-regular fa-square-check"></i></span>Personal trainer</li>
                            <li><span><i class="fa-regular fa-square-check"></i></span>Standard options</li>
                            <li><span><i class="fa-regular fa-square-check"></i></span>4 classes per week</li>
                        </ul>
                        <button className='button'>Join Now</button>
                    </div>
                </div>

            </div>
        </div>
        </section>
    )
}

export default Pricing;