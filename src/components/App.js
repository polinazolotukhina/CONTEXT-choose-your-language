import React, { useState } from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../context/LanguageContext';
import ColorContext from '../context/ColorContext';

function   App(){
    const [language, setLanguage ] = useState('english');
        return (
            <div className="ui container">
                <div>
                    Select a language :
                    <i className="flag us" onClick={()=>{ setLanguage('english')} }/>
                    <i className="flag ru" onClick={()=>{ setLanguage('russian')} }/>
                </div>
                <ColorContext.Provider value="primary">
                    <LanguageContext.Provider value={language}>
                        <UserCreate />
                    </LanguageContext.Provider>
                </ColorContext.Provider >
            </div>
        )
}

export default App;
