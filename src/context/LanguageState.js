import React, { useReducer } from 'react';
import { SET_ENGLISH, SET_JAPANESE } from './Types';
import LanguageContext from './LanguageContext';
import LanguageReducer from './LanguageReducer';
export const LanguageState = props => {
  const initialState = {
    language: 'english'
  }
  
  const [state, dispatch] = useReducer(LanguageReducer, initialState);

  const setEnglish = () => {
    dispatch({
      type: SET_ENGLISH
    })
  }

  const setJapanese = () => {
    dispatch({
      type: SET_JAPANESE
    })
  }

  return <LanguageContext.Provider 
            value={{
              language: state.language,
              setEnglish,
              setJapanese
            }}>
              {props.children}
          </LanguageContext.Provider>
}
export default LanguageState;