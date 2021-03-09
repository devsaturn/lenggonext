import React from 'react'
import Typewriter from 'typewriter-effect';
import style from '../styles/Typeeffect.module.css'

function TextDescription() {
    return (
            <div className="typewriter">
                <h3>Vous êtes{'  '}<Typewriter
                    options={{
                        strings: ['une entreprise ?', 'un établissement public ?', 'une structure d\'insertion ?', 'un club d\'entreptise ?'],
                        autoStart: true,
                        loop: true,
                    }}
                    /> 
                </h3>
            </div>

    )
}

export default TextDescription
