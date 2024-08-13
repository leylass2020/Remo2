import call from "../imgs/icons/phonecall.svg";
import mail from "../imgs/icons/mail.svg";
import location from "../imgs/icons/map-pin.svg";
import behance from "../imgs/icons/Behance.svg";
import linked from "../imgs/icons/Linkedin.svg";
import face from "../imgs/icons/Facebook.svg";
import git from "../imgs/icons/Github.svg";
import thread from "../imgs/icons/Threads.svg";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/contact.css";

function ContactUs() {
  const l5 = [
    {
      icon: call,
      text: " +963 997555668",
      id: 1,
    },
    {
      icon: mail,
      text: " ranem.omarr@gmail.com",
      id: 2,
    },
    {
      icon: location,
      text: " 1245,Damascus, Syria",
      id: 3,
    },
  ];
  return (
    <>
      <div className="container contact-container">
        <div className="row head-title">
          <h1>
            <a href="#">Contact Us</a>
          </h1>
          <hr />
        </div>
        <div className="row field-contact">
          <div className="col col-8 col-lg-6 field-left">
            <div className="head">
              <h3>Say Hi!</h3>
              <p>We'd like to talk with you. </p>
            </div>
            <div className="contact-info">
              <form>
              <label htmlFor="name">My name is</label>
              <input type="text" name="name" id="name" required />
              <label htmlFor="email">My email is</label>
              <input type="email"  name="email" id="email" required/>  
              <label htmlFor="text">Your message</label>
              <textarea name="text" id="text" cols={4} rows={5} required minLength={30}></textarea>
              <button type="submit" className="submait">send mesage</button>
              </form>
            </div>
          </div>
          <div className="col col-8 col-lg-6 field-right">
            <h1>We Transform ideas into a working Reality</h1>
            <p>
              Fill up the form and our Team will get back to you within 24
              hours.
            </p>
            <ul>
              {l5.map((item) => (
                <li key={item.id}>
                  <p>
                    <img src={item.icon} className="small-icon"></img>
                    {item.text}
                  </p>
                </li>
              ))}
            </ul>
            <div className="contact-icon">
              <img src={behance}></img>
              <img src={linked}></img>
              <img src={face}></img>
              <img src={git}></img>
              <img src={thread}></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ContactUs;
