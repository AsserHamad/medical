import { useAppContext } from '../contexts/AppContext';
import {languageText} from './languageManager';

export const useLanguageText = (_text : any) => {
    const {language} = useAppContext();
    return languageText[language][_text];
}