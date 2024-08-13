import "../styles/footer.css";
import "bootstrap/dist/css/bootstrap.css";
import whitLogo from "../imgs/Group 31.svg";
import call from "../imgs/icons/phonecall.svg";
import mail from "../imgs/icons/mail.svg";
import location from "../imgs/icons/map-pin.svg";
import {Link} from "react-router-dom";

function Footer() {
  const l1 = [
    { name: "Home", path: "/" },
    { name: "Our projects", path: "/" },
    {name:"Our process",path:"/"},
    {name:"Careers",path:"/Careerse"},
    {name:"About Us",path:"/AboutPage"},
  ];
  const l2 = ["Supports", "Chat live", "Term & Conditions", "Privacy"];
  const l3 = [
    "Software engineering",
    "MVP Development",
    "Web development",
    "Devops services",
    "UI/UX design",
  ];
  const l4 = ["Database", "Branding"];
  const l5 = [
    {
      icon: call,
      text: " +963 997555668",
      id: 1,
    },
    {
      icon: mail,
      text: " ranem.omarr@gmail.com ",
      id: 2,
    },
    {
      icon: location,
      text: " 1245, Damascus, Syria",
      id: 3,
    },
  ];
  return (
    <>
      <div className="main-footer">
        <div className="row justify-content-center">
          <div className="col col-lg-2 col4">
            <h4>Menu</h4>
            <ul className="list-group">
              {l1.map((item) => (
                <li key={item.name} className="list-item">
                  <Link to={item.path} onClick={() => {
                  window.location.href = item.path;
                }} className="a-link">
                  {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col col-lg-2 col-4">
            <h4>Information</h4>
            <ul className="list-group">
              {l2.map((item) => (
                <li key={item} className="list-item">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="col col-lg-2 col-4">
            <h4>Our Services</h4>
            <ul className="list-group">
              {l3.map((item) => (
                <li key={item} className="list-item">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="col col-lg-2 col-4">
            <h4>Our Services</h4>
            <ul className="list-group">
              {l4.map((item) => (
                <li key={item} className="list-item">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="col col-lg-3 col-4">
            <h4>Contact Info</h4>
            <ul className="list-group">
              {l5.map((item) => (
                <li key={item.id} className="list-item">
                  <img src={item.icon}></img>
                  {" " + item.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <hr className="hr" />
        <div className="row lower">
          <div className="col col-lg-4">
            <img src={whitLogo} className="logo-white"></img>
          </div>
          <div className="col col-lg-4 ">
            <p>Copyright © Travel 2023 All rights reserved</p>
          </div>
          <div className="col col-lg-4 "></div>
        </div>
      </div>
    </>
  );
}
export default Footer;
