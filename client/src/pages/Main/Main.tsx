import { useEffect, useState } from 'react';
import './Main.css';
import ScrollCard from '../../components/primitive/ScrollCard/ScrollCard';
import Modal from '../../components/primitive/Modal/Modal';
import { changeChoice, checkForChoice } from '../../utils/api_requests';

import choices from './choices.json';
import { useAppContext } from '../../contexts/AppContext';
import { useLanguageText } from '../../hooks/language';

const Main = () => {
  const [choice, setChoice] = useState(0);
  const {language, flipLanguage} = useAppContext();
  const [modalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    checkForChoice()
    .then((resp : any) => {
      if(resp) {
        setChoice(resp.choice);
      }
    })
    .catch(err => {
      console.log(err);
    })
  }, []);

  const toggleChoice = (choice: any) => {
    setChoice(choice);
    setModalVisible(true);
  }

  const submit = (info : any) => {
    setModalVisible(false);
    changeChoice({info, choice})
    .then(res => console.log(res))
    .catch(err => console.log(err));
  }

  return (
    <div className={`container ${language}`}>
      <div className="header">
        <Modal submit={submit} visible={modalVisible} setVisible={setModalVisible} />
          <div className="logos-container">
            <div className={`logo-container ${language + '-logos'}`}>
            <img alt="Logo" className="logo" src="logo.png" />
            </div>
            <div>
            <img alt="Xceed Logo" className="xceed-logo" src="xceed.png" />
            </div>
          </div>
          <div className="change-language" onClick={flipLanguage}>{useLanguageText('language')}</div>
      </div>
      <div className="inner-container">
        <div className="titles">
          <p className="title">{useLanguageText('title')}</p>
          <p className="subtitle">{useLanguageText('subtitle')}</p>
        </div>
        <a className="title-button" href={`medical_doc.docx`} download>
        {useLanguageText('difference')}
        </a>
        <div className="scroll-container">
          {choices.map(_choice => {
            return (
              <ScrollCard {..._choice} onClick={() => toggleChoice(_choice.number)} key={_choice.number} selected={_choice.number === choice} />
              )
            })}
        </div>
      </div>
    </div>
  );
}

export default Main;
