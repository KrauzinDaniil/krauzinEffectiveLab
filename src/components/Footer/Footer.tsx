import classes from "./Footer.module.css"

const currentDate = new Date();
const CURRENT_YEAR = currentDate.getFullYear();

const Footer: React.FC = () => {
    return (



        <footer className={classes.footer}>

            <img src="src/assets/marvel_logo.svg" />
            <div>Data provided by Marvel. © {CURRENT_YEAR} MARVEL</div>
            <div>developer.marvel.com</div>
        </footer>


    )
}


export default Footer; 