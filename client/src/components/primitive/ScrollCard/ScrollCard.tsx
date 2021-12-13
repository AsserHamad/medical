import { ScrollCardProps } from "./ScrollCardTypes";
import './ScrollCard.css';
import { useAppContext } from "../../../contexts/AppContext";
import { useLanguageText } from "../../../hooks/language";

const ScrollCard = (props : any) => {
    const {language} = useAppContext();
    const choose = useLanguageText('choose');
    const chosen = useLanguageText('chosen');
    return (
        <div className={`scroll-card ${language + '-card'}`}>
            <p className="scroll-title" style={{color: props.color}}>{props.title[language]}</p>
            <p className="scroll-description">{props.description[language]}</p>
            <p className="scroll-price">{props.price[language]}</p>
            {!props.selected ? 
                <button className="scroll-button" onClick={props.onClick}>{choose}</button> :
                <button className="scroll-button-selected">{chosen}</button>
            }
        </div>
    )
}

export default ScrollCard;