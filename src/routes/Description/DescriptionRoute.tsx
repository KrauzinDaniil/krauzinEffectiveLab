import React from "react";
import {CardArray } from "../../components/Storage(Mock)/Data";
import Description from "../../components/Description/Description";



const DescriptionRoute: React.FC<CardArray> = ({cards}) => {
  
       return (


        <Description cards={cards}/>
        



         )
  
  
  
  
  
  }
  
  export default DescriptionRoute;