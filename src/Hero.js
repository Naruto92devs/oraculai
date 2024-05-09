import './Hero.css';
import herobg from './images/hero-bg.png';
import orbits from './images/orbits.png';
import planet1 from './images/planet1.png';
import planet2 from './images/planet2.png';
import planet3 from './images/planet3.png';
import planet4 from './images/planet4.png';
import planet5 from './images/planet5.png';
import planet6 from './images/planet6.png';
import planet7 from './images/planet7.png';
import planet8 from './images/planet8.png';
import planet9 from './images/planet9.png';
import planet10 from './images/planet10.png';
import planet11 from './images/planet11.png';
import planet12 from './images/planet12.png';
import planet13 from './images/planet13.png';
import logo from './images/logo.png';
import twitter from './images/twitter.png';
import telegram from './images/telegram.png';

function Hero() {
    return (
      <div className="hero">
        <nav className='nav'>
            <img className='logo' src={logo} alt='logo' />
            <div className='links'>
                <a href='/' ><p className='p'>Follow us</p></a>
                <a href='/'><img src={twitter} alt='logo' /></a>
                <a href='/'><img src={telegram} alt='logo' /></a>
            </div>
        </nav>
        <div className='content'>
          <h1>Welcome to <br/> ORACUL AI </h1>
          <p>
            Our platform utilizes cutting AI-techniques to provide up-to-the minute 
            predictive signals and insights into various real-world assets, including 
            commodities like precious metals, energy, agriculture and art.
            </p>
          <div className='btn-group'>
          <a href='/' className='btn'>
            Buy Now &#8594;
          </a>
          <a href='/' className='btn' style={{background:'black', color: '#fff', border: '1px solid #fff'}}>
            Launch Dapp &#8594;
          </a>
          </div>
        </div>
        <img className='hero-bg' src={herobg} alt='logo' />
        <img className='orbits' src={orbits} alt='logo' />
        <img className='planet1' src={planet1} alt='logo' />
        <img className='planet2' src={planet2} alt='logo' />
        <img className='planet3' src={planet3} alt='logo' />
        <img className='planet4' src={planet4} alt='logo' />
        <img className='planet5' src={planet5} alt='logo' />
        <img className='planet6' src={planet6} alt='logo' />
        <img className='planet7' src={planet7} alt='logo' />
        <img className='planet8' src={planet8} alt='logo' />
        <img className='planet9' src={planet9} alt='logo' />
        <img className='planet10' src={planet10} alt='logo' />
        <img className='planet11' src={planet11} alt='logo' />
        <img className='planet12' src={planet12} alt='logo' />
        <img className='planet13' src={planet13} alt='logo' />
      </div>
    );
  }
  
  export default Hero;