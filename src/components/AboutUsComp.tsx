import "bootstrap/dist/css/bootstrap.css";
import "../styles/aboutuscomp.css";
import rect1 from "../imgs/Rectangle 71.svg";
import rect2 from "../imgs/rect white.svg";

function AboutUsComp() {
  const p1 = [
    {
      title: "Start with your Ideas",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. ",
      id: 1,
    },
    {
      title: "Transform Idea To Reality",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. ",
      id: 2,
    },
    {
      title: "Build and development your mobile and web application  ",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. ",
      id: 3,
    },
  ];
  return (
    <>
      <div className="container container-about1">
        <div className="row">
          <div className="col col-lg-6 col-md-7">
            <div className="leftAbout">
              <h1>
                <strong><a href="#">About Us</a></strong>
              </h1>
              <hr className="title-line"/>
              <span>Lorem ipsum dolor sit amet consectetur.</span>
            </div>
            <div className="left-sec">
              <h2>Your Solutions</h2>
              <ul>
                
                {p1.map((item) => (
                  
                  <li key={item.id}>
                    <hr className="vl"/>
                    <h5>{item.title}</h5>
                    <span>{item.body}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="img-col col col-lg-5 col-md-4">
            <img className="img1" src={rect2}></img>
            <img className="img2" src={rect1}></img>
          </div>
        </div>
      </div>
    </>
  );
}
export default AboutUsComp;
