import typo from "../imgs/case study/TypoGraphy.svg";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/casestudy.css";
import dash from "../imgs/case study/Vector 35.svg";
import mpo1 from "../imgs/case study/main.svg";
import main1 from "../imgs/case study/main3.svg";
import main2 from "../imgs/case study/main.svg";
import main3 from "../imgs/case study/main(1).svg";
import pho2 from "../imgs/case study/Pixel 7 Pro Mockup label2.svg";
import dash1 from "../imgs/case study/Vector 41.svg";
import creat from "../imgs/case study/Create Account sign up.svg";
import discover from "../imgs/case study/Discover and home.svg";
import discover2 from "../imgs/case study/Discover package dubai.svg";
import plan from "../imgs/case study/Rectangle 1506.svg";
import italy from "../imgs/case study/Italy card image.svg";
import icland from "../imgs/case study/Iceland card image.svg";
import call from "../imgs/icons/phonecall.svg";
import mail from "../imgs/icons/mail.svg";
import location from "../imgs/icons/map-pin.svg";

import iph1 from "../imgs/case study/Google Pixel 7 Pro Mockup Obsidian label.svg";
import icon1 from "../imgs/case study/icons.svg";
import icon2 from "../imgs/case study/Frame 2936.svg";
import d1 from "../imgs/case study/Vector 40.svg";
import b from "../imgs/case study/unsplash_M0AWNxnLaMw.svg";

function CaseStudy() {
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
  const font = "FigTree google";
  const color1 = [
    "rgba(108, 117, 125, 1)",
    "rgba(196, 196, 196, 1)",
    "rgba(214, 214, 214, 1)",
    "rgba(217, 217, 217, 1)",
  ];
  const color2 = [
    "rgba(52, 58, 64, 1)",
    "rgba(223, 195, 98, 1)",
    "rgba(242, 222, 148, 1)",
    "rgba(246, 237, 202, 1)",
  ];
  const color3 = ["rgba(13, 139, 255, 1)"];
  return (
    <>
      <section>
        <img src={typo}></img>
      </section>
      <section className="section-2">
        <div className="container">
          <div className="row sec-2">
            <div className="col col-4">
              <h1>Aa</h1>
            </div>
            <div className="col col-4">
              <h2>FigTree google</h2>
            </div>
            <div className="col col-2 font">
              <h3>Font</h3>
            </div>
          </div>
          <hr />
          <div className="row alpha-row">
            <div className="col col-lg-8">
              <div className="alpha">
                <h2 style={{ fontStyle: font }}>
                  <div> ABCDEFGHIJKLMNOPQRSTUVWXYZ </div>
                  <div> abcdefghijklmnopqrstuvwxyz</div>
                </h2>
              </div>
            </div>
          </div>
          <div className="row dash">
          <div className="col col-3 ">
              <img src={dash} className="dash1"></img>
            </div>
            <div className="col col-4">
              <div className="color-img">
                <img className="im1" src={main1}></img>
                <img className="im2" src={iph1}></img>
              </div>
            </div>
          </div>

          <div className="coloring row">
            <div className="col col-8">
              <h2>Color</h2>
            </div>
            <div className="col col-3">
              <h3>Hex</h3>
            </div>
          </div>
          <hr></hr>
          <div className="row color">
            <div className="col col-4 ">
              <p>Natural</p>
              <ul>
                {color1.map((item) => (
                  <li>
                    <div style={{ backgroundColor: item }}></div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col col-4">
              <p>Primary</p>
              <ul>
                {color2.map((item) => (
                  <li>
                    <div style={{ backgroundColor: item }}></div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col col-3">
              <p>Other</p>
              <ul>
                {color3.map((item) => (
                  <li>
                    <div style={{ backgroundColor: item }}></div>
                  </li>
                ))}
              </ul>
            </div>
            
          </div>
          {/*end color */}
          <div className="row icons">
            <h1>Icons</h1>
            <hr></hr>
            <div className="col col-10">
              <div className="box">
                <img src={icon1} className="ico1"></img>
                <img className="ico2" src={icon2}></img>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="display">
        <div className="container">
          <div className="row">
            <h1>Display</h1>
            <hr></hr>
          </div>

          <div className="row con-dis">
            <div className="col col-8">
              <img src={d1} className="dis1"></img>
            </div>
            <div className="col col-8">
              <img className="dis4 m1" src={main1}></img>
              <img className="dis4 m2" src={iph1}></img>
            </div>
            <div className="col col-8">
              <img className="dis5 m3" src={main3}></img>
              <img className="dis5 m4" src={pho2}></img>
            </div>
            <div className="col col-8">
              <img src={b} className="dis2"></img>
            </div>
            <div className="col col-8">
              <img src={dash1} className="dis3"></img>
            </div>

            <div className="col col-8">
              <img src={creat} className="dis6"></img>
            </div>

            <div className="col col-8">
              <img src={discover} className="dis7"></img>
            </div>
            <div className="col col-8">
              <img src={dash1} className="dis7-1"></img>
            </div>
            <div className="col col-8">
              <img src={discover2} className="dis8"></img>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container end">
          <div className="discover">
            <h1>
              Discover <span>the</span>
              <br />
              World <span>with </span>us
              <br />
              <span>Travel </span>easy <span>via </span>app <br />
              <span>and</span> Exciting!
            </h1>
          </div>
          <div className="row">
            <img src={plan} className="plan"></img>
          </div>
          <div className="row two-img">
            <div className="col col-5.9">
              <img src={italy} className="plan2"></img>
            </div>
            <div className="col col-5.9">
              <img src={icland} className="plan3"></img>
            </div>
          </div>

          <div className="row end-case">
            <div className="col col-1">
              <div className="dot"></div>
              <div className="line1"></div>
            </div>
            <div className="col col-9 thanks">
              <h1>Thank You For Watching!</h1>
              <h2>
                Write me now and we will
                <br />
                discuss you project
              </h2>
              <ul className="list-group case-footer">
                {l5.map((item) => (
                  <li key={item.id} className="list-item">
                    <img src={item.icon}></img>
                    {" " + item.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default CaseStudy;
