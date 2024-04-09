import classes from "./Card.module.css";
import { Link } from "react-router-dom";
import { IoHeart } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";
import { useState } from "react";

const Card: React.FC<{
  thumbnail: string;
  name: string;
  description: string;
  id: number;
  isHero: boolean;
  changeStorage: (key: string, value: string, mode: string) => void;
}> = ({ thumbnail: thumbnail, name, id, isHero, description, changeStorage }) => {
  const [showHeart, setShow] = useState(false);

  const [chosen, setChosen] = useState(
    changeStorage(id.toString(), "", "check") !== null
  );
  
  return (
    <div
      className={classes.card}
      onMouseEnter={() => {
        setShow(true);
      }}
      onMouseLeave={() => {
        setShow(false);
      }}
    >
      <div
        className={classes.heart}
        onClick={() => {
          !chosen
              ? (changeStorage(
                    JSON.stringify(id),
                    JSON.stringify({ thumbnail: { path: thumbnail}, name, description, id, isHero }),
                    "add"
                ),
                setChosen(!chosen))
              : (changeStorage(id.toString(), "", "delete"),
                 setChosen(!chosen));
      }
    }
      >
        { !chosen ? showHeart ? <IoHeartOutline/> : "" : <IoHeart/>  }
      </div>
      <div className={classes.photo}>
        <img src={thumbnail} />
        <div className={classes.description}>
          <div>
            {" "}
            <Link
              to={isHero === true ? "/characters/" + id : "/comics/" + id}
              className={classes.heroName}
            >
              {name}
            </Link>
          </div>
          <div className={classes.about}>{description}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
