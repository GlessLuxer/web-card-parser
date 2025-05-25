import React, { useState, useEffect } from 'react';
import './Selector.css';

const merchArray = ['10xx-1030', '1050', '1060', '1070', '1080', '1090'];

function Selector() {
  // Используем state для всех изменяемых значений
  const [extendName, setExtendName] = useState(''); //хук на 
  const [finalName, setFinalName] = useState('');
  const [isOpen, setIsOpen] = useState(false); //хук на скрытие списка
  const [modelName, setModelName] = useState('Card model...'); //хук на выбор из списка моделей

  const openCloseList = () => {
    setIsOpen(!isOpen);
  };

  const changeModelName = (event) => {
    setModelName(event.target.textContent);
    setIsOpen(false); // Закрываем список
    setFinalName(`${event.target.textContent} ${extendName}`);
  };
  const changeModelNameAfterRadio = () => {
    setModelName(modelName);
    setFinalName(`${modelName} ${extendName}`);
    console.log(finalName);
  }

  return (
    <div className='selector_widget'>
      <div className='panelGrid'>
        <button className="button" onClick={openCloseList}>
          {modelName}
        </button>
        {isOpen && (
          <ul className='list'>
            {merchArray.map(item => (
              <li 
                key={item} 
                className='list_element' 
                onClick={changeModelName}
              >
                {item}
              </li>
            ))}
          </ul>
        )}
        <label htmlFor="radioNone" className='label'>
          None
          <input 
            type="radio" 
            className='radio' 
            id='radioNone' 
            name='radio' 
            onClick={() => {setExtendName(''); changeModelNameAfterRadio()}}
          />
        </label>
        <label htmlFor="radioSuper" className='label'>
          Super
          <input 
            type="radio" 
            className='radio' 
            id='radioSuper' 
            name='radio' 
            onClick={() => {setExtendName('Super'); changeModelNameAfterRadio()}}
          />
        </label>
        <label htmlFor="radioTi" className='label'>
          Ti
          <input 
            type="radio" 
            className='radio' 
            id='radioTi' 
            name='radio' 
            onClick={() => {setExtendName('Ti'); changeModelNameAfterRadio()}}
          />
        </label>
        <div>
          Итоговое значение: {finalName}
        </div>
      </div>
    </div>
  );
}

export default Selector;
