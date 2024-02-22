import React from 'react'
import './index.css'
import lungs from '../../assets/img/lunges.png'
import yoga from '../../assets/img/yoga-pose.png'
import pose from '../../assets/img/extended.png'
 
const Exercise = () => {
    return (
        <section id="schedule">
            <div className='container exercise_container'>
                <div className='exercise_top'>
                    <h2 className='section_title'>
                        Benifits of <span className='hightlights'>Exercise</span>
                    </h2>
                    <p>
                    "I walk on a track inspired by the Panchtatvas or 5 
                    elements of nature<br/> - Prithvi, Jal, Agni, Vayu, Aakash. 
                    This is extremely refreshing and rejuvenating.
                    </p>
                </div>

                <div className='exercise_wrapper'>
                    <div className='exercise_item' data-aos='zoom-in'
                            data-aos-duration='2000'>
                        <span className='exercise_icon'>
                            <img src={lungs} alt=''/>
                        </span>
                        <div className='exercise_content'>
                            <h4>Healthy Life</h4>
                            <p>
                            A lunge can refer to any position of the human body where one leg is 
                            positioned forward with knee bent and foot flat on the ground while the other 
                            leg is positioned behind.
                            </p>
                        </div>
                    </div>
                

                    <div className='exercise_item' data-aos='zoom-in'
                            data-aos-duration='2000'>
                        <span className='exercise_icon'>
                            <img src={yoga} alt=''/>
                        </span>
                        <div className='exercise_content'>
                            <h4>Increase Flexibility</h4>
                            <p>
                            Are you doing yoga for fitness and to get in shape as well as to explore the mind-body connection?<br/>
                             Then choose a more vigorous yoga style like power yoga, Ashtanga yoga, or Bikram yoga. 
                            </p>
                        </div>
                    </div>


                    <div className='exercise_item' data-aos='zoom-in'
                            data-aos-duration='2000'>
                        <span className='exercise_icon'>
                            <img src={pose} alt=''/>
                        </span>
                        <div className='exercise_content'>
                            <h4>Reducing Blood Presure</h4>
                            <p>
                            A lunge can refer to any position of the human body where one leg is<br/> 
                            positioned forward with knee bent and foot flat on the ground while the other<br/> 
                            leg is positioned behind.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Exercise;