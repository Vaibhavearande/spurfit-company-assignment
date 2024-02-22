import React from 'react';
import { useRef} from 'react';
import './index.css';
import { useEffect } from 'react';
// import images from '../../assets/img/dumble.png'
const nav_links = [
    {
        path:'#home',
        display:'Home'
    },
    {
        path:'#schedule',
        display:'Schedule'
    },
    {
        path:'#classes',
        display:'Classes'
    },
    {
        path:'#pricing-plan',
        display:'Pricing'
    },

]


const Header = () => {
    const headerRef = useRef(null)

    const headerFunc = () => {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
            headerRef.current.classList.add("sticky_header")
        } else {
            headerRef.current.classList.remove("sticky_header")
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", headerFunc);
    }, [])
    
    const handleClick= e => {
        e.preventDefault();

        const targetAttr = e.target.getAttribute("href");
        const location = document.querySelector(targetAttr).offsetTop;

        window.scrollTo({
            left: 0,
            top: location - 80,
        });
    };
    
    return (
    <header className='header' ref={headerRef}>
        <div className='container'>
            <div className='bg-container'>
                <div className='logo'>
                    <div className="logo_img">
                        <img src="https://media.istockphoto.com/id/1205988090/vector/dumbbells-line-and-solid-icon-heavy-weights-barbel-sport-vector-design-concept-outline-style.jpg?s=2048x2048&w=is&k=20&c=9onZqwUhbRkukJUHu0Yxn1sfpX1Q8-UUeAxx-pvVfI4=" 
                            alt="" 
                        />
                    </div>
                    <h1>FitBody</h1>
                </div>

                <div className='navigation'>
                    <ul className='menu'>
                        {
                            nav_links.map(item=>(
                                <li className='nav_item'><a onClick={handleClick} href={item.path}>
                                    {item.display}</a></li>
                            ))
                        }
                    </ul>
                </div>

                <div className='nav_right'>
                    <button className='register_btn'>Register</button>
                    <span className='mobile_menu'>
                        <i class="ri-menu-line"></i>
                    </span>
                </div>
            </div>
        </div>
    </header>
    );
}

export default Header

