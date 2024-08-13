import "bootstrap/dist/css/bootstrap.css";
import "../styles/card.css";
import { motion } from "framer-motion";

function Card({ props }) {
  const arr = props;
  return (
    <>
      <motion.div
        whileInView={{ y: -5 }}
        transition={{ type: "spring", delay: 0.25 }}
      >
      <div className="row card-container">
        {arr.map((it) => (
          <div className="col">
            <div className="card">
              <img src={it.imgp} className="card-img-top"></img>
              <div className="card-body">
                <h5 className="card-title">{it.title}</h5>
                <p className="card-text">{it.text}</p>
                <ul className="position-icons">
                  {it.imgs.map((item) => (
                    <li className="position" key={item.id}>
                      <img src={item.ims}></img>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
      </motion.div>
    </>
  );
}
export default Card;
