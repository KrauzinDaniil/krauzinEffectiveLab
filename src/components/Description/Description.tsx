import classes from "./Description.module.css";

import { DescriptionProps } from "../../types/descriptionProps";
import { Link } from "react-router-dom";

const Description: React.FC<{ description: DescriptionProps, isFavourited: boolean }> = ({
  description, isFavourited
}) => {
  return (
    <div className={classes.main}>
      <img
        src={  
          !isFavourited ?
          description.thumbnail?.path
          ?.concat("/detail.")
          .concat(description.thumbnail.extension.toString()) : description.thumbnail.path}
        className={classes.photo}
      />
      <div className={classes.wrapper}>
        <div className={classes.innerWrapper}>
          <div className={classes.name}>{description.name} </div>
          <div className={classes.description}>{description.description} </div>
        </div>
        
        <div className={classes.label}>
          {description.isChar ? "Comics" : "Heroes"}
          {description.dataList.items.map((item, index) => {
            const matchResult = item.resourceURI.match(/\d+/g);
            if (matchResult !== null) {
              const resourceId = matchResult[1];
              const linkTo = 
              
              !isFavourited ? 
              description.isChar
                ? `/comics/${resourceId}`
                : `/characters/${resourceId}`:  
                `/favourites/${resourceId}`  ;
              return (
                <Link to={linkTo} key={index}>
                  <div className={classes.listElem}>{item.name}</div>
                </Link>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Description;
