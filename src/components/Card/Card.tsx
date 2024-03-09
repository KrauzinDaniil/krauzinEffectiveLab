import classes from './Card.module.css'
import { Link } from 'react-router-dom';
interface CardProps {  
    imageUrl: string; 
    name: string; 
    description: string;   
    id : number; 
}



const Card: React.FC<CardProps> = (props) => {
    
    return (

       <div className={classes.card}>
    
        <div className={classes.photo}>
        <img src={props.imageUrl}/>
        <div className={classes.description}>
            <div> <Link to= {"/characters/" + props.id} className={classes.heroName}>{props.name}</Link></div>
            <div className={classes.about}>{props.description}</div>    
        
        
        </div> 
 
  

       </div>
       </div>

    )
}


export default Card; 