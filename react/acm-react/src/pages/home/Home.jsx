import React from 'react';
import './HomeStyle.css'; 

// Box react element, that is for housing a title and description.
// all arguments are taken as strings
function Box({ Title, Description, Link }) {
  return (
    <a className="boxed" href={Link} target="_blank" rel="noreferrer">
      <h1>{Title}</h1>
      <p>{Description} </p>
    </a>
  );
}


function Home() {
  return (
    <div className="mainbody">

        <div className="splash"><h1>ACM@AMU</h1>
          <div className="custom-shape-divider-bottom-1714112145">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
            </svg>
        </div></div>

      

        {/* <div className="splash"><img className="splash-image" src={require('./coding_splash.jpg')} alt="main screen" /></div> */}

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
