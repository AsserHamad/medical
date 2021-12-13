import { useEffect, useState } from 'react';
import './App.css';
import ScrollCard from './components/primitive/ScrollCard/ScrollCard';
import { baseURL } from './utils/apis';
import { changeChoice, checkForChoice } from './utils/api_requests';

const choices = [
  {
    title: 'الباقة الأولى',
    description: 'للمزيد من المعلومات أنقر على "ما الفرق بين الباقات؟"',
    price: '50,000 ج.م.',
    color: '#6D9FF5',
    number: 1
  },
  {
    title: 'الباقة الثانية',
    description: 'للمزيد من المعلومات أنقر على "ما الفرق بين الباقات؟"',
    price: '100,000 ج.م.',
    color: '#2E7BFF',
    number: 2
  },
  {
    title: 'الباقة الثالثة',
    description: 'للمزيد من المعلومات أنقر على "ما الفرق بين الباقات؟"',
    price: '150,000 ج.م.',
    color: '#0000A5',
    number: 3
  },
  {
    title: 'الباقة الرابعة',
    description: 'للمزيد من المعلومات أنقر على "ما الفرق بين الباقات؟"',
    price: '200,000 ج.م.',
    color: '#06005E',
    number: 4
  }
]

function App() {
  const [choice, setChoice] = useState(0);
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

  useEffect(() => {
    if(choice)
      changeChoice(choice)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }, [choice]);
  return (
    <div className="container">
      <div className="header">
        <div className="logo-container">
          <img alt="Logo" className="logo" src="logo.png" />
        </div>
        <div>
          <img alt="Xceed Logo" className="xceed-logo" src="xceed.png" />
        </div>
      </div>
      <div className="inner-container">
        <div className="titles">
          <p className="title">إختر الباقه الطبية</p>
          <p className="subtitle">الرجاء التقدم باختيار باقه طبية قبل تاريخ 20/12/2021</p>
        </div>
        <a className="title-button" href={`${baseURL}/files/medical_doc.docx`} download>
          ما الفرق بين الباقات؟ 
        </a>
        <div className="scroll-container">
          {choices.map(_choice => {
            return (
              <ScrollCard {..._choice} onClick={() => setChoice(_choice.number)} key={_choice.number} selected={_choice.number === choice} />
              )
            })}
        </div>
      </div>
    </div>
  );
}

export default App;
