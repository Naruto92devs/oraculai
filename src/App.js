import Hero from "./Hero";
import space_man from './images/space-man.png';
import twitter from './images/twitter.png';
import telegram from './images/telegram.png';
import tiktok from './images/tiktok.png';
import youtube from './images/youtube.png';
import medium from './images/medium.png';
import feature_1 from './images/feature-1.png';
import feature_2 from './images/feature-2.png';
import feature_3 from './images/feature-3.png';
import feature_4 from './images/feature-4.png';
import interchain from './images/interchain-img.png';
import planet15 from './images/planet15.png';
import planet16 from './images/plenet-16.png';


function App() {
  return (
    <div className="App">
      <Hero />
  <section className="cs" id="about">
    <div className="left">
      <p className="p1">DEMSYTIFYING COMMODITY TRADING</p>
      <h2>Complexities of Asset<br/> Trading simplified<br/> through AI</h2>
      <p className="p2">
      Oracul AI is committed to revolutionizing the way real-world assets are
       traded by integrating cutting-edge artificial intelligence to predict asset values.
        Our mission is to make trading real world assets understandle and accessible
         to all through tokenization and AI-driven technological innovation.
      </p>
      <div className="btn-group">
        <a href="#" className="btn">
          Buy Now &#8594;
        </a>
        <a href="/" className="btn" style={{background:'transparent', color: '#fff'}}>Chart &#8594;</a>
      </div>
    </div>
    <div className="right">
      <img src={space_man} alt="" className="space-man" />
    </div>
  </section>

  <section className="feature" id="features">
    <img src={interchain} className="feature-bg" />
    <div className="left"></div>
    <div className="right">
      <p className="opacity1">PREDICTIVE ANALYTICS</p>
      <h2>Features of Oracul AI</h2>
      <p className="opacity">
        Far more than a chatbot, true, custom-trained LLMs have the ability to read, 
        understand and interpret vast amounts of content far beyond what humans are capable of.
        </p>
        <div className="feature-wrap">
          <div className="feature-box">
            <img src={feature_1} />
            <h3>Real-Time Predictions</h3>
            <p className="opacity">
              Our platform utilizes AI to provide real-time predictive insights into 
              various assets, including commodities like gold and silver, and fine art. 
              This feature allows traders to stay ahead by making informed decisions 
              based on anticipated market movements.
            </p>
          </div>
          <div className="feature-box">
            <img src={feature_2} />
            <h3>Custom AI Algorithms</h3>
            <p className="opacity">
              Oracul AI's strength lies in its custom-developed NLM/AI algorithms 
              that analyze vast amounts of market data, global news, and economic 
              trends to generate accurate predictions. 
              These algorithms are designed to adapt and improve continuously, 
              ensuring relevance and accuracy.
              </p>
          </div>
          <div className="feature-box">
            <img src={feature_3} />
            <h3>Commodities Can Be FUN!</h3>
            <p className="opacity">
            Our dynamic binary betting pool utility will allow you to put your tokens on 
            your predictions, and have a shot at winning! Test the accuracy of Oracul's 
            predictions with tokenized betting!
              </p>
          </div>
          <div className="feature-box">
            <img src={feature_4} />
            <h3>Ready to trade commodities?</h3>
            <p className="opacity">
            Oracul's suite of algorithmically managed stable-coins will be 
            pegged to live real world prices, enabling users to easily get 
            exposure to synthetic commodities trading, investing directly 
            based on Oracul's predictions. 
              </p>
          </div>
        </div>
        <a href="/" className="btn">Join Telegram &#8594;</a>
    </div>
  </section>

  <section className="community" id="community">
    <div className="left">
      <h2>Meet the worldwide</h2>
      <h2>community.</h2>
      <p class="p2">Join a fast-growing community of developers, innovators and investors, connected all over the world, united by their passion for real-world asset investing and trading. </p>
      <a href="#" class="btn">Buy Now &#8594;</a>
    </div>
    <div className="right">
      <div className="cc">
        <div>
          <a href="/">
            <img src={telegram} alt="logo"/>
          </a>
        </div>
        <div>
          <h4>
            Community Chat <img src="assets/images/arrow-angled.png" alt="" />
          </h4>
          <p className="p1">
          Ask questions and chat directly with the project leaders, real world  fintech developers, commodities investment experts and like-minded investors on Telegram. 
          </p>
        </div>
      </div>
      <div className="cc">
        <div>
          <a href="/">
            <img src={twitter} />
          </a>
        </div>
        <div>
          <h4>
            Twitter <img src="assets/images/arrow-angled.png" alt="" />
          </h4>
          <p className="p1">
            Follow @planetX to get the latest news and updates from across the
            ecosystem.
          </p>
        </div>
      </div>
    </div>
  </section>
  <section className="tokenomics" id="token">
  <img src={planet15} className="planet15"/>
  <img src={planet16} className="planet16"/>
    <h2>Our Tokenomics</h2>
    <div className="token-wrap">
      <div className="left">
       <ul>
        <li>Token Utility</li>
        <li>Stabilizer Pool</li>
        <li>Distribution</li>
        <li>Reward and Increment</li>
       </ul>
        <p className="p1 opacity1">Total Supply</p>
        <h1>1 Billion</h1>
      </div>
      <div className="right">
        <p className="p1 opacity1">BUY / SELL TAX</p>
        <h1>5%</h1>
        {/* <p className="p2 slippage opacity">
        (Set slippage to 1.1 to Buy, 2.1 to Sell)
        </p> */}
        <p className="p1 symbol opacity1">SYMBOL / TICKER</p>
        <h1 className="ticker">$ORACUL</h1>
      </div>
    </div>
  </section>

  <section className="roadmap" id="roadmap">
    <h2>Our Roadmap</h2>
    <div className="road-wrap">
      <div className="phases">
        {/* <p className="p1">Launch</p> */}
        <h3>Phase 1</h3>
        <p className="opacity">Launch the Oracul token, establish a strong community,
           and build a solid foundation for the ecosystem's future growth.
          </p>
      </div>
      <div className="phases">
        {/* <p className="p1">Marketing</p> */}
        <h3>Phase 2</h3>
        <p className="opacity">
        Research and develop AI-driven price prediction signals for a wide 
        range of real-world assets, ensuring accuracy & reliability. This effort 
        will begin with gold as access to data & information is readily available, 
        enabling us to execute quickly while we learn and test.  Begin token 
        gateway for access to full features for future enablement. 
        </p>
      </div>
      <div className="phases">
        {/* <p className="p1">To The Moon</p> */}
        <h3>Phase 3</h3>
       <p className="opacity">
       Design & develop a super fun binary-choice  betting pool mechanism, 
       enabling users to put their tokens “down” as bets on future price predictions.  
       This helps inform and train our AI while giving users a fun way to engage and learn. 
       </p>
      </div>
      <div className="phases">
        {/* <p className="p1">To The Moon</p> */}
        <h3>Phase 4</h3>
        <p className="opacity">
        Design & build a series of algorithmic stablecoins pegged to real-world assets, 
        incorporating robust minting, burning, & price stabilization mechanisms. 
        We will keep tokens mirrored to real world price predictions. In phase 4, 
        we will  gradually launch these  asset-pegged stablecoins, prioritizing 
        high-demand assets & continuously monitoring & refining the platform 
        based on user feedback & market performance. 
        These will not be available to trade until we have launched & tested them significantly.  
        <p><strong>
          Beyond phase 4, we will expand the ecosystem into the mainstream investment world.</strong>
          </p>
          </p>
      </div>
    </div>
  </section>

  <section className="buy-sec">
    <h1>
      Buy Oracul Ai
    </h1>
    <div className="btn-group">
    <a href="#" className="btn">
      Buy Now &#8594;
    </a>
    <a href="#" className="btn" style={{background:'transparent', color: '#fff', border: '1px solid #fff'}}>
      Launch Dapp &#8594;
    </a>
    </div>
    <div className="social-group">
      <a href="/">
        <img src={twitter} alt="" />
      </a>
      <a href="/">
        <img src={telegram} alt="" />
      </a>
      <a href="/">
        <img src={tiktok} alt="" />
      </a>
      <a href="/">
        <img src={medium} alt="" />
      </a>
      <a href="/">
        <img src={youtube} alt="" />
      </a>
    </div>
  </section>
  <footer>
    <ul>
      <li>
        <a href="#about">About Us</a>
      </li>
      <li>
        <a href="#features">Features</a>
      </li>
      <li>
        <a href="#token">Tokenomics</a>
      </li>
      <li>
        <a href="#roadmap">Roadmap</a>
      </li>
    </ul>
    <hr />
    <p className="p2">© Copyright ORACUL AI 2024</p>
  </footer>
    </div>
  );
}

export default App;
