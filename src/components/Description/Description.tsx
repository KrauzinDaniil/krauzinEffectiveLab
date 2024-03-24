import classes from './Description.module.css'

import { descriptionProps } from '../../types/descriptionProps';




const Description: React.FC<descriptionProps> = (props) => {

    return (
        <div className={classes.main}>
            <img src={props.thumbnail?.path} className={classes.photo} />
            <div className={classes.wrapper}>
                <div className={classes.innerWrapper}>
                    <div className={classes.name}>{props.name} </div>
                    <div className={classes.description}>{props.description} </div>


                </div>

            





            </div>

        </div>
    )
}




export default Description; 