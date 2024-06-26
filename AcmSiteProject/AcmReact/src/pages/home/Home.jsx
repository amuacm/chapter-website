import React from 'react';
import { useState, useEffect } from "react";
import axios from 'axios';
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

/* This  is  for the big content boxes that is in each chapter section */
function BiggerBox({ Title, Description}) {
  return (
    <div className="bigger-boxes">
      <h1>{Title}</h1>
      <p>{ Description }</p>
    </div>
  );
}

function Quote({ Text, Name }) {
  return (
    <>
      <div className="quote-align">
        <h1>"{Text}"</h1>
        <p>-{Name}</p>
      </div>
    </>
  );
}

function QuoteForm({ SubBox, NameBox }) {
  const [formData, setFormData] = useState({
    quote: "",
    name: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the form data, like submit to a server or perform validation
    console.log(formData);
  };

  return (
    <form className="quote-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="quote"
        value={formData.quote}
        onChange={handleChange}
        placeholder="Type your quote here..."
      />

      <div className="botttom-form">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Put your ave email too!"
        />

        <button type="submit">Submit</button>
      </div>
    </form>
  );
}


function Home() {

    const fetchCSRFToken = async () => {
      try {
        const response = await axios.get('/get-csrf-token/');
        const csrfToken = response.data.csrf_token;
        console.log('CSRF Token:', csrfToken);
        return csrfToken;
      } catch (error) {
        console.error('Error fetching CSRF token:', error);
        return null;
      }
};

    const [quote, setQuote] = useState('');

    useEffect(() => {
        axios.get('/quote/')
          .then(response => {
            setQuote(response.data.quote);
          })
          .catch(error => {
            console.log(error);
          });
    }, []);

  return (

    <div className="mainbody">

      <header>
        <a href="https://www.acm.org/" target="_blank"> <img src="https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/acm-512.png" alt="acm logo"/></a>
        <div className="header-links">
          <div className="hlinks-align">
            <a href="https://unsplash.com/photos/macbook-pro-JO_S6ewBqAk">
              Resources
            </a>
            <a href="https://unsplash.com/photos/macbook-pro-JO_S6ewBqAk">
              Events
            </a>
            <a href="https://unsplash.com/photos/macbook-pro-JO_S6ewBqAk">
              Showcase
            </a>
            <a href="https://unsplash.com/photos/macbook-pro-JO_S6ewBqAk">
              Join!
            </a>
          </div>
        </div>
      </header>

      <div className="splash"><h1>ACM@AMU</h1></div>

      {/* Is the section and div elements supposed to be unordered like this? */}
      <section className='waves'>
      <div className="custom-shape-divider-top-1714174669">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
    </svg>
</div>
    </section>


      {/* <div className="splash"><img className="splash-image" src={require('./coding_splash.jpg')} alt="main screen" /></div> */}

      <Quote 
      Text={quote}
      Name="Professor Perugini"
      />
      <div className="content-boxes">
        <Box
          Title="Resources"
          Description="Here you can find the links and information regarding Ave Maria's Computer Science program."
          Link="https://saverio.carrd.co/"
        />
        <Box
          Title="Events"
          Description="Find upcoming events on campus and online! The ACM is always looking for ideas, so also feel free to submit your vision. "
          Link="https://www.acm.org/"
        />
        <Box
          Title="Showcase"
          Description="If you're looking for inspiration or just want to see some interesting projects, explore the creativity of some of our members here."
          Link="https://www.midjourney.com/home"
        />
        <Box
          Title="Join ACM!"
          Description="We are always looking for members! We feel that everyone can contribute in there own way."
          Link="https://www.acm.org/"
        />
      </div>
 
      {/* Either here or in place of conte-boxes put the random perg quote and quote submissions box */}
    <QuoteForm Text="Type your quote here..." Name="Put your ave email too!" /> 

      <footer>
        <ul className="link-list">
          <li>
            <h3> Socials </h3>
          </li>
          <li> @ Discord </li>
          <li> @ Twitter </li>
          <li> @ Instagram </li>
          <li>
            <a href="https://github.com/amuacm"> @ Github </a>
          </li>
        </ul>
        <ul className="link-list">
          <li>
            <h3> Contributors </h3>
          </li>
          <li>
            <a
              href="https://github.com/colecantu904"
              target="_blank"
              rel="noreferrer"
            >
              [frontend] cantu.tech
            </a>
          </li>
          <li>
            <a
              href="https://www.github.com/cbaier33/"
              target="_blank"
              rel="noreferrer"
            >
              [backend] baier.tech
            </a>
          </li>
          <li>
            <a href="https://www.github.com/amuacm/chapter-website"> Source Code </a>
          </li>
        </ul>
        <a href="https://www.avemaria.edu/" target="_blank" rel="noreferrer">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Ave_Maria_University_Seal.svg/512px-Ave_Maria_University_Seal.svg.png"
            alt="amu logo"
          />
        </a>
      </footer> 
    </div>
  );
}

export default Home;
