import { useEffect } from 'react';
import Aos from 'aos';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Exercise from './components/Exercise'
import Start from './components/Start';
import Pricing from './components/Pricing';
import Slider from './components/Slider';
import Footer from './components/Footer';

function App() {

    useEffect(()=>{
        Aos.init()
    }, [])

    return <>
    <Header/>
    <Hero/>
    <Exercise/>
    <Start/>
    <Pricing/>
    <Slider/>
    <Footer/>
    </>
}

export default App;
