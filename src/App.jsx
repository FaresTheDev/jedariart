import "./styles/App.css";
import { useState } from 'react';
import emailjs from '@emailjs/browser';
// header imports
import jedariartLogo from "./assets/images/JedariartLogo.png";
// Hero imports
import "./styles/heroStyles.css";
import ProjectOnePhoto from "./assets/images/project-one-photo.png";
import ProjectTwoPhoto from "./assets/images/project-two-photo.png";
import ProjectThreePhoto from "./assets/images/project-three-photo.png";
// AboutUs imports
import "./styles/aboutUsStyles.css";
import WorkInProg1 from "./assets/images/WorkInProg1.jpg";
import WorkInProg2 from "./assets/images/WorkInProg2.jpg";
import WorkInProg3 from "./assets/images/WorkInProg3.jpg";
import WorkInProg4 from "./assets/images/WorkInProg4.png";
// Contact imports
import "./styles/contactStyles.css";
import girliRose from "./assets/images/Girli-rose.jpg";
import gym from "./assets/images/gym.jpg";
import teaCupGirl from "./assets/images/tea-cup-girl.jpg";
function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Emailjs data
    const serviceID = 'service_z9bh3gi';
    const templateID = 'template_fjdhgv3';
    const publicKey = 'lT-Ip7l26TR1pjQHV';

    // dynamic object for user message
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'tech team',
      message: message,
    };

    // send email
    emailjs.send(serviceID, templateID, templateParams, publicKey)
     .then(() => {
      setName("");
      setEmail("");
      setMessage("");
        console.log("sent");
      })
      .catch (() => {
        console.error("error");
      })
  };
  return (
    <>
      <div className="header">
        <img className="logo" src={jedariartLogo} />
        <div className="navbar">
          <ul className="navbar-item-list">
            <li>
              <a href="#" className="active">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="active">
                About us
              </a>
            </li>
            <li>
              <a href="#contact" className="active">
                Contact
              </a>
            </li>
            <li>
              <a href="" className="inactive">
                Shop <b>coming soon</b>
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Hero section */}
      <div id="home" className="hero-wrapper">
        <div className="hero-container">
          <div className="left-section">
            <p className="statements">
              We put an emphasis on creating a warm and welcoming atmosphere
              through art.
              <br />
              We invite you to be part of our mission
              <br />
              <b> to bring art into everyday life.</b>
            </p>

            <button className="call-to-action-btn">
              Our online gallery is coming soon!
            </button>
          </div>

          <div className="right-section">
            <img src={ProjectOnePhoto} className="project-one-photo" />
            <img src={ProjectTwoPhoto} className="project-two-photo" />
            <img src={ProjectThreePhoto} className="project-three-photo" />
          </div>
        </div>
      </div>
      {/* AoutUs section */}
      <div id="about" className="about-us-container">
        <div className="left-side">
          <img src={WorkInProg1} className="work-in-prog-1" />
          <img src={WorkInProg2} className="work-in-prog-2" />
          <img src={WorkInProg3} className="work-in-prog-3" />
          <img src={WorkInProg4} className="work-in-prog-4" />
        </div>
        <div className="right-side">
          <h2>About</h2>
          <h1>Jedariart</h1>
          <p>
            Jedariart is an Art and Design company that specializes in interior
            design for many establishments and also partakes in local events.
            <br />
            Jedariart recognizes the potential of the rapidly evolving
            entertainment and events sector, and we are proud to have our prints
            in <b>Riyadh and Jeddah Seasons</b>.
          </p>
          <p>
            Founded and headquartered in Riyadh; with roots in Medina and
            Jeddah, we set to make the kingdom colorful and filled with amazing
            and unique art.
          </p>
        </div>
      </div>
      {/* Contact section */}
      <div id="contact" className="contact-us-container">
        <div className="contact-left-side">
          <h1>
            Bring <b>colour</b> to your everyday life! <br /> Reach out, let us
            make something beautiful.
          </h1>
          <div className="email-form">
            <form onSubmit={handleSubmit}>
              <div className="input-fields">
                <input
                  type="text"
                  required
                  value={name}
                  placeholder="Your name"
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="email"
                  required
                  value={email}
                  placeholder="Your email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <br />
                <input
                  className="user-messsage"
                  type="textarea"
                  value={message}
                  placeholder="Your message"
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <button className="submit-button" type="submit">
              Register your interest 
              </button>
            </form>
          </div>
          <h2>Or you can find us on:</h2>
          <div className="icons">
            <a
              href="https://twitter.com/jedariart?s=21&t=S5FOR0ac-ERnlpKcX4EMwA"
              target="_blank"
            >
              <button className="x-icon">
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    
                    d="M60 60L36.5362 25.0309L36.5762 25.0637L57.7323 0H50.6625L33.4282 20.4L19.7421 0H1.20051L23.1062 32.6483L23.1036 32.6455L0 60H7.0698L26.2303 37.3037L41.4585 60H60ZM16.9408 5.45453L49.8621 54.5455H44.2597L11.3118 5.45453H16.9408Z"
                    fill="#3C3B23"
                  />
                </svg>
              </button>
            </a>

            <a
              href="https://www.instagram.com/jedari.art/?igsh=MzRlODBiNWFlZA%3D%3D"
              target="_blank"
            >
              <button className="insta-icon">
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M30.003 21C27.6161 21 25.3269 21.9482 23.639 23.636C21.9512 25.3239 21.003 27.6131 21.003 30C21.003 32.3869 21.9512 34.6761 23.639 36.364C25.3269 38.0518 27.6161 39 30.003 39C32.3899 39 34.6791 38.0518 36.367 36.364C38.0548 34.6761 39.003 32.3869 39.003 30C39.003 27.6131 38.0548 25.3239 36.367 23.636C34.6791 21.9482 32.3899 21 30.003 21ZM30.003 15C33.9812 15 37.7966 16.5804 40.6096 19.3934C43.4226 22.2064 45.003 26.0218 45.003 30C45.003 33.9782 43.4226 37.7936 40.6096 40.6066C37.7966 43.4196 33.9812 45 30.003 45C26.0248 45 22.2094 43.4196 19.3964 40.6066C16.5834 37.7936 15.003 33.9782 15.003 30C15.003 26.0218 16.5834 22.2064 19.3964 19.3934C22.2094 16.5804 26.0248 15 30.003 15ZM49.503 14.25C49.503 15.2446 49.1079 16.1984 48.4047 16.9016C47.7014 17.6049 46.7476 18 45.753 18C44.7584 18 43.8046 17.6049 43.1013 16.9016C42.3981 16.1984 42.003 15.2446 42.003 14.25C42.003 13.2554 42.3981 12.3016 43.1013 11.5983C43.8046 10.8951 44.7584 10.5 45.753 10.5C46.7476 10.5 47.7014 10.8951 48.4047 11.5983C49.1079 12.3016 49.503 13.2554 49.503 14.25ZM30.003 6C22.581 6 21.369 6.021 17.916 6.174C15.564 6.285 13.986 6.6 12.522 7.17C11.2968 7.61981 10.1892 8.34078 9.282 9.279C8.34302 10.1862 7.62106 11.2938 7.17 12.519C6.6 13.989 6.285 15.564 6.177 17.913C6.021 21.225 6 22.383 6 30C6 37.425 6.021 38.634 6.174 42.087C6.285 44.436 6.6 46.017 7.167 47.478C7.677 48.783 8.277 49.722 9.273 50.718C10.284 51.726 11.223 52.329 12.513 52.827C13.995 53.4 15.573 53.718 17.913 53.826C21.225 53.982 22.383 54 30 54C37.425 54 38.634 53.979 42.087 53.826C44.433 53.715 46.011 53.4 47.478 52.833C48.702 52.381 49.8092 51.6603 50.718 50.724C51.729 49.716 52.332 48.777 52.83 47.484C53.4 46.008 53.718 44.43 53.826 42.084C53.982 38.775 54 37.614 54 30C54 22.578 53.979 21.366 53.826 17.913C53.715 15.567 53.397 13.983 52.83 12.519C52.3778 11.2951 51.6571 10.1879 50.721 9.279C49.8142 8.33954 48.7065 7.6175 47.481 7.167C46.011 6.597 44.433 6.282 42.087 6.174C38.778 6.018 37.62 6 30 6M30 0C38.151 0 39.168 0.0299998 42.369 0.18C45.561 0.33 47.739 0.831 49.65 1.575C51.63 2.337 53.298 3.369 54.966 5.034C56.4915 6.53369 57.6719 8.34777 58.425 10.35C59.166 12.261 59.67 14.439 59.82 17.634C59.961 20.832 60 21.849 60 30C60 38.151 59.97 39.168 59.82 42.366C59.67 45.561 59.166 47.736 58.425 49.65C57.6739 51.6533 56.4933 53.4678 54.966 54.966C53.4659 56.491 51.6519 57.6713 49.65 58.425C47.739 59.166 45.561 59.67 42.369 59.82C39.168 59.961 38.151 60 30 60C21.849 60 20.832 59.97 17.631 59.82C14.439 59.67 12.264 59.166 10.35 58.425C8.34698 57.6734 6.53258 56.4928 5.034 54.966C3.50829 53.4665 2.32788 51.6524 1.575 49.65C0.831 47.739 0.33 45.561 0.18 42.366C0.0359998 39.168 0 38.151 0 30C0 21.849 0.0299998 20.832 0.18 17.634C0.33 14.439 0.831 12.264 1.575 10.35C2.32571 8.34654 3.50641 6.53196 5.034 5.034C6.53301 3.50769 8.34729 2.32719 10.35 1.575C12.261 0.831 14.436 0.33 17.631 0.18C20.835 0.0389998 21.852 0 30.003 0"
                    fill="#3C3B23"
                  />
                </svg>
              </button>
            </a>
            <a
              href="https://www.linkedin.com/company/jedariart/"
              target="_blank"
            >
              <button className="linkedin-icon">
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.35 12.5001C17.3493 13.8261 16.8219 15.0976 15.8837 16.0349C14.9456 16.9721 13.6736 17.4982 12.3475 17.4976C11.0214 17.4969 9.74989 16.9695 8.81267 16.0313C7.87546 15.0932 7.34931 13.8211 7.34998 12.4951C7.35064 11.169 7.87806 9.89747 8.81621 8.96026C9.75436 8.02304 11.0264 7.4969 12.3525 7.49756C13.6786 7.49822 14.9501 8.02564 15.8873 8.96379C16.8245 9.90194 17.3506 11.174 17.35 12.5001ZM17.5 21.2001H7.49998V52.5001H17.5V21.2001ZM33.3 21.2001H23.35V52.5001H33.2V36.0751C33.2 26.9251 45.125 26.0751 45.125 36.0751V52.5001H55V32.6751C55 17.2501 37.35 17.8251 33.2 25.4001L33.3 21.2001Z"
                    fill="#3C3B23"
                  />
                </svg>
              </button>
            </a>
          </div>
        </div>
        <div className="contact-right-side">
          <img className="picOne" src={girliRose} />
          <img className="picTwo" src={gym} />
          <img className="picThree" src={teaCupGirl} />
        </div>
      </div>
    </>
  );
}

export default App;
