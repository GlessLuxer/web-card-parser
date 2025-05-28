import React, { useState, useEffect } from 'react';
import './Selector.css';

const merchArray = ['GeForce RTX 30 Series', 'GeForce RTX 40 Series', 'GeForce RTX 50 Series'];
const merchArraySeries50 = ['GeForse RTX 5060','GeForse RTX 5060 Ti', 'GeForse RTX 5070', 'GeForse RTX 5070 Ti', 'GeForse RTX 5080', 'GeForse RTX 5090'];
const merchArraySeries40 = ['GeForse RTX 4060','GeForse RTX 4060 Ti', 'GeForse RTX 4070', 'GeForse RTX 4070 Ti', 'GeForse RTX 4070 Ti SUPER', 'GeForse RTX 4080 Super', 'GeForse RTX 4090'];
const merchArraySeries30 = ['GeForse RTX 3050 (6GB)','GeForse RTX 3050 (8GB)','GeForse RTX 3060','GeForse RTX 3060 Ti', 'GeForse RTX 3070', 'GeForse RTX 3070 Ti', 'GeForse RTX 3080', 'GeForse RTX 3080 Ti', 'GeForse RTX 3090','GeForse RTX 3090 Ti'];


function Selector() {
  // Используем state для всех изменяемых значений
  const [extendName, setExtendName] = useState(''); //хук на 
  const [finalName, setFinalName] = useState('');
  const [isOpen, setIsOpen] = useState(false); //хук на скрытие списка
  const [modelName, setModelName] = useState('Card model...'); //хук на выбор из списка моделей
  const [childIsOpen, setChildIsOpen] = useState(false); //хук на дочерний список

  const openCloseList = () => {
    setIsOpen(!isOpen);
  };

  const childOpenCloseList = () => {
    setChildIsOpen(!childIsOpen);
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
          {modelName}{isOpen && (
          <ul className='list'>
            {merchArray.map(item => (
              <li 
                key={item} 
                className='list_element' 
                // onClick={changeModelName}
                onClick={childOpenCloseList}
              >
                {item}{childIsOpen && (
                  <ul className='list'>
                    {merchArraySeries30.map(item => (
                      <li 
                      key={item} 
                      className='list_element' 
                      onClick={changeModelName}>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        )}
        </button>
        
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
          {finalName}
        </div>
      </div>
    </div>
  );
}

export default Selector;
