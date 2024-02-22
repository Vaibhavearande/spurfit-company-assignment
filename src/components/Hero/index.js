import React from 'react';
import './index.css'
import heroImg from '../../assets/img/gym-02.png'
// import dumbell from '../../assets/img/dumble.png'
const Hero = () => {
  return (
    <section id="home">
      <div className='container'>
        <div className='hero_wrapper'>
          <div className='hero_content'>
            <h2 className='section_title' 
            data-aos='fade-up'
            data-aos-duration='2000'
            >Exercise is the key to a  
              <span className='highlights'> Healthy</span> Lifestyle
            </h2>
            <p data-aos='fade-up'
            data-aos-delay='100'
            data-aos-duration='2200'>Stay healthy, stay fit. Make your family fit and strong with us. 
              <br/>We help you to get fit for the better tomorrow.
               Get in the groove of fitness with us.
            </p>
            
            <div className='hero_btn' data-aos='fade-up'
            data-aos-delay='200'
            data-aos-duration='2200'>
              <button className='register_btn'>Get Started</button>
              <button className='watch_btn'>
                <span>
                  <i class="ri-play-fill"></i>
                </span>
                Watch Video
              </button>
            </div>
          </div>
          <div className='hero_img'>
            <div className='hero_img-wrapper'>
              <div className='box-1'>
                <div className='box-2'>
                  <div className='box-3'>
                    <div className='box_img'>
                      <img src={heroImg} alt='' />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='heart_rate' data-aos='fade-right'
            data-aos-duration='2000'>
              <h5>Heart Rate</h5>
              <span><i className="ri-heart-pulse-line"></i></span>
              <h5>2567 BPM</h5>
            </div>

            <div className='gym_location' data-aos='fade-left'
            data-aos-duration='2000'>
              <span><i className="ri-map-pin-user-line"></i></span>
              <h5>Find a new gym near you</h5>
            </div>

            <div className='dumble_icon' data-aos='fade-down'
            data-aos-duration='2000'>
              <img src="https://media.istockphoto.com/id/1987292643/vector/gym-vector-icon-design-illustration.jpg?s=2048x2048&w=is&k=20&c=xQHoTuW7e-_JCABuqK3m-b5jtmGIs6qTbBw61mK0LtE=" alt='' className='gym_location'/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
