import classes from './Search.module.css'
const Search: React.FC = () => { 
    return  (
       

       <div className={classes.wrapper}>
       <div className={classes.innerWrapper}> <h1>Characters</h1>  <div className={classes.numba}> (1562)</div> </div>
       <div className={classes.wrapperSearch}>

        
       <form action="" method="" className={classes.form}>
       <input type="text" name="search" placeholder="Search for characters by name"/>
       </form>
        
        <button className={classes.search}>Search</button>

       </div>
       </div>
          
     


    
    )
    }
    
    
    export default Search; 