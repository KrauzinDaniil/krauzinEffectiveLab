import { useParams } from 'react-router-dom';
import {CardArray} from '../Storage(Mock)/Data';
import { ListData } from '../Storage(Mock)/Data';
import classes from './Description.module.css'
import { Link } from 'react-router-dom';

const VisualHeros: React.FC<ListData> = (props)  =>  {   
   
    return (
        <div className={classes.main}>
            <img src={props.imageUrl} className={classes.photo}   />
             <div className={classes.wrapper}> 
             <div className={classes.innerWrapper}>
               <div className={classes.name}>{props.name} </div>
               <div className={classes.description}>{props.description} </div>
            

             </div>

             <div className={classes.label}> { props.isCharacter ? "Comics" :  "Heroes " }  
             {props.contentList.map((item, index) => (
              <Link to={props.isCharacter ? "/comics/" + item.id : "/characters/" + item.id}>  <div key={index} className={classes.listElem}>{item.name}</div> </Link> 
            ))}




             </div>
             
            
             
             
             
             </div>

        </div>
    )
}






const Description: React.FC<CardArray> = ({cards}) => {
    
    const  {id} = useParams();
    const realdId : number = (id as unknown as number);

    return (                                                               
         <div>
         <VisualHeros name = {cards[realdId].name} imageUrl= {cards[realdId].imageUrl} description= {cards[realdId].description} 
         id = {cards[realdId].id} contentList={cards[realdId].contentList} isCharacter = {cards[realdId].isCharacter}   />
        </div>
        


    )
}


export default Description; 