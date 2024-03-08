import classes from './Card.module.css'

interface CardProps {  
    imageUrl: string; 
    name: string; 
    description: string;   
}



const Card: React.FC<CardProps> = (props) => {
    return (

       <div className={classes.card}>
    
        <div className={classes.photo}>
        <img src={props.imageUrl}/>
        <div className={classes.description}>
            <div className={classes.heroName}>{props.name}</div>
            <div className={classes.about}>{props.description}</div>    
        
        
        </div> 
 
 

       </div>
       </div>

    )
}


export default Card; 