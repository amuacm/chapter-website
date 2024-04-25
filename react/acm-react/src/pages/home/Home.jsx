import React from 'react';
import './HomeStyle.css'; 

// Box react element, that is for housing a title and description.
// all arguments are taken as strings
function Box({ Title, Description, Link }) {
  return (
    <a className="boxed" href={Link}>
      <h1>{Title}</h1>
      <p>{Description} </p>
    </a>
  );
}

function Home() {
  return (
    <div className="mainbody">
        <div className="splash"><img className="splash-image" src={require('./coding_splash.jpg')} alt="main screen" /></div>

        <div className="content-boxes">
            <Box
            Title="Resources"
            Description="Here you can find the links and information regarding Ave's CSCI program."
            Link="https://saverio.carrd.co/"
            />
            <Box
            Title="Events"
            Description="Find upcoming events on campus and online! The ACM is always looking for ideas, so also feel free to submit your vision. "
            Link="https://theimag.org/"
            />
            <Box
            Title="Cool Stuff"
            Description="If your looking for any insparation, or just want to see some interesting projects, explore the creativity of some of out peers."
            Link="https://theimag.org/"
            />
            <Box
            Title="Join ACM!"
            Description="We are always looking for members! We feel that everyone can contribute in there own way"
            Link="https://www.acm.org/"
            />
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
