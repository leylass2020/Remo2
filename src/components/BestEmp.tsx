import "../styles/bestemp.css";
import "bootstrap/dist/css/bootstrap.css";
import star1 from "../imgs/team/Starperspectivematte.svg";

function BestEmp({ props }) {
  const star = star1;
  const emp = props;
  return (
    <>
      <div className="best-container container" >
        <div className="row emp-img">
          <div className="col col-11">
            <img src={emp.img}></img>
          </div>
        </div>
        <div className="row star-row ">
          <div className="col col-2 star">
            <img src={star}></img>
          </div>
          <div className="col col-2 star">
            <img src={star}></img>
          </div>
          <div className="col col-2 star">
            <img src={star}></img>
          </div>
          <div className="col col-2 star">
            <img src={star}></img>
          </div>
          <div className="col col-2 star">
            <img src={star}></img>
          </div>
        </div>
        <div className="row name">
          <div className="col col-12 ">
            <h3>{emp.name}</h3>
          </div>
        </div>
        <div className="row dep">
        <div className="col col-12">
            <p>Software Engineer</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default BestEmp;
