import { ScrollCardProps } from "./ScrollCardTypes";
import './ScrollCard.css';

const ScrollCard = (props : ScrollCardProps) => {
    return (
        <div className="scroll-card">
            <p className="scroll-title" style={{color: props.color}}>{props.title}</p>
            <p className="scroll-description">{props.description}</p>
            <p className="scroll-price">{props.price}</p>
            {!props.selected ? 
                <button className="scroll-button" style={{backgroundColor: props.color}} onClick={props.onClick}>إختر</button> :
                <button className="scroll-button-selected">الاختيار الحالي</button>
            }
            
        </div>
    )
}

export default ScrollCard;