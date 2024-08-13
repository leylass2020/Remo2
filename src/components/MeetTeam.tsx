import "../styles/meetteam.css";
import "bootstrap/dist/css/bootstrap.css"
import person1 from "../imgs/team/Rectangle80.svg";
import person2 from "../imgs/team/Rectangle83.svg";
import person3 from "../imgs/team/Rectangle84.svg";
import person4 from "../imgs/team/Rectangle82.svg";

import icon1 from "../imgs/team/depicons/Design.svg";
import icon2 from "../imgs/team/depicons/Development.svg";
import icon3 from "../imgs/team/depicons/Manager.svg";
import icon4 from "../imgs/team/depicons/gaming remote.svg";
import im from "../imgs/team/emp.svg";
import other from "../imgs/team/around.svg";

import Card from "./Card";
import BestEmp from "./BestEmp";

function MeetTeam() {
  const emp = { name: "Majd hasan", dep: "Software Engineer", img: im };
  const team = [
    {
      title: "Eng. Nawar ali",
      id: 1,
      imgp: person1,
      text: "Ceo,Remo start",
      imgs: [
        { id: 1, ims: icon2 },
        { id: 2, ims: icon3 },
      ],
    },
    {
      title: "Eng.Mohammad",
      id: 2,
      imgp: person2,
      text: "programing,Remo start",
      imgs: [{ id: 1, ims: icon4 }],
    },
    {
      title: "Eng.Ranim omar",
      id: 3,
      imgp: person3,
      text: "UI/UX, Remo start",
      imgs: [{ id: 1, ims: icon1 }],
    },
    {
      title: "Eng.sarya",
      id: 4,
      imgp: person4,
      text: "UI/UX, Remo start",
      imgs: [{ id: 1, ims: icon1 }],
    },
  ];

  const navigateToMeetTeam = () => {
    window.location.href = "/Careers";
  };
  return (
    <>
      <div className="container meet-container">
        <h1>
          <a href="/Careers">Meet Our Team</a>
        </h1>
        <hr />
        <p>
          We help build and manage a team of world-class developers<br></br> to
          bring your vision to life
        </p>
        <div className="row">
            <Card props={team} />
        </div>

        <div className="row hire-best">
          <div className="col col-6 col-lg-3 ">
            <h1 className="hire-h1">
              Hire the best <br /> employee!
            </h1>
          </div>
          <div className="col col-9 col-lg-5 best-emp col-md-6">
            <BestEmp props={emp} />
          </div>
          <div className="col col-6 comp-best col-lg-3">
            <img src={other}></img>
            <button onClick={navigateToMeetTeam} className="see-other">See other our team</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default MeetTeam;
