import React from 'react';
import LanguageContext from '../context/LanguageContext';

//With this.context (only good if there is no more then one context in a  project)

class Field extends React.Component{
    static contextType = LanguageContext;

    render(){
        const name = this.context === 'english' ? 'Name' : 'Имя'
        return (
            <div className="ui field">
                <label> {name} </label>
                <input />
            </div>
        )
    }
}

export default Field;
