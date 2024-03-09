import classes from './Search.module.css'

interface searchProps  { 
     amount: number; 
     type: boolean 
     

}





const Search: React.FC<searchProps> = (props) => { 
    return  (
       

       <div className={classes.wrapper}>
       <div className={classes.innerWrapper}> <h1>{props.type === true ? "Сharacters" : "Comics"  }</h1>  <div className={classes.numba}> ({props.amount})</div> </div>
       <div className={classes.wrapperSearch}>

        
       <form action="" method="" className={classes.form}>
       <input type="text" name="search"  placeholder={
        "Search for " + 
        (props.type ===true ? "characters" : "comics") + 
        " by name"
    }  />
       </form>
        
        <button className={classes.search}>Search</button>

       </div>
       </div>
          
     


    
    )
    }
    
    
    export default Search; 