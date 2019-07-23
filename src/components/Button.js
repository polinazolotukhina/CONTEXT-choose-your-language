import React from 'react';
import LanguageContext from '../context/LanguageContext';
import ColorContext from '../context/ColorContext';

//With CONSUMER (good to use if there is more then one context in a project)

class Button extends React.Component{
    renderButton(color) {
        return(
            <button className={ `ui button ${color}` }>
                <LanguageContext.Consumer>
                    {(value) => value==='english' ? 'Submit' : 'Отправить'}
                </LanguageContext.Consumer>
            </button>
        )

    }

    render(){

        return (
            <ColorContext.Consumer>
                {
                    (color) => this.renderButton(color)


                }

            </ColorContext.Consumer>
        )
    }
}

export default Button;
