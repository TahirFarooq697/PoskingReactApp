import React from 'react';
import BtnwithIcon from '../BtnwithIcon';
import EnglishFlag from "../../assets/Images/englishFlag.png"
import ArabicFlag from "../../assets/Images/arabic.png"
import BanglaFlag from "../../assets/Images/bangla.png"
const LanguageSelector = ({ref}) => {
  return (
    <div className='w-40 bg-white shadow-lg rounded-lg' ref={ref}>
    <BtnwithIcon title="English" icon={EnglishFlag}/>
    <BtnwithIcon title="Arabic" icon={ArabicFlag}/>
    <BtnwithIcon title="Bangla" icon={BanglaFlag}/>
    </div>
  );
}

export default LanguageSelector;
