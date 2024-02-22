import React from 'react';
import './index.css';
import trainerImg from '../../assets/img/trainer.png'

const Start = () => {
    return (
        <section id="classes">
            <div className='container'>
                <div className='start_wrapper'>
                    <div className='start_img'>
                        <img src={trainerImg} alt='' data-aos='zoom-left'
                            data-aos-duration='2000'/>
                    </div>
                    <div className='start_content' data-aos='fade-right'
                            data-aos-duration='2000'>
                        <h2>
                            Ready to make a <span className='hightlights'>change?</span>
                        </h2>
                        <p>
                        Exercise trainers, also known as personal fitness trainers, work with individual clients or small groups. They may train in a gym or in clients' homes.
                         They evaluate their clients' current fitness level, personal goals, and skills.
                        </p>
                        <button className='register_btn'>Get Started</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Start;