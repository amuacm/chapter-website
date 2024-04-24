import React from 'react';
import './HomeStyle.css'; 

function Home() {
  return (
    <div classNameName="mainbody">
        <div className="splash"><img className="splash-image" src={require('./coding_splash.jpg')} alt="main screen" /></div>

        <div className="content-boxes">
            <div className="boxed">
                <h1>Resources</h1>
                <p> This is the sentence. </p>
            </div>
            <div className="boxed">
                <h1>Events</h1>
                <p> This is the sentence. </p>
            </div>
            <div className="boxed">
                <h1>Cool Stuff</h1>
                <p> This is the sentence. </p>
            </div>
            <div className="boxed">
                <h1>Join ACM!</h1>
                <p> This is the sentence. </p>
            </div>
        
        </div>

        <div>
        <footer>
            <div className="social-link">
                <a href="https://discord.gg/n97UVKv3"><h2>Discord</h2></a>
            </div>
            <div className="social-link">
                <h2>Twitter</h2>
            </div>

        </footer>
         
        </div>

    </div>
  );
}

export default Home;
