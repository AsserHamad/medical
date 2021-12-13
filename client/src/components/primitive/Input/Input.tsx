import { useLanguageText } from "../../../hooks/language";
import "./Input.css";
const Input = ({label, data} : any) => {

    return (
        <div className="input-container">
            <p>{useLanguageText(label)}</p>
            <input value={data} />
        </div>
    )
}

export default Input;