import classes from './Characters.module.css'
import Search from './Search/Search';
import Card from '../Card/Card';
import {CardArray} from '../Storage(Mock)/Data'

//cards.map((item, index) => (
  //  <Card key={index} adress={item.imageUrl} name={item.name} description={item.description} />
//)  


const Characters: React.FC<CardArray> = ({cards}) => {
    return (

        <main className={classes.main}>
        <Search></Search>
        <div className={classes.divider}></div>
        <div className={classes.list}>
          {cards.map((item, index) => (<Card key = {index} imageUrl = {item.imageUrl} name =  {item.name} description = {item.description} />) ) } 
        
        </div>
        </main>


    )
}


export default Characters; 