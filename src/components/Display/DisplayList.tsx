import classes from './DisplayList.module.css'
import Search from './Search/Search';
import Card from '../Card/Card';
import { CardArray } from '../Storage(Mock)/Data'


const DisplayList: React.FC<CardArray> = ({ cards }) => {
  return (
    <main className={classes.main}>
      <Search amount={cards.length} type={cards[0].isCharacter}></Search>
      <div className={classes.divider}></div>
      <div className={classes.list}>
        {cards.map((item, index) => (<Card key={index} imageUrl={item.imageUrl} name={item.name} description={item.description} id={item.id} isHero={item.isCharacter} />))}
      </div>
    </main>
  )
}


export default DisplayList; 