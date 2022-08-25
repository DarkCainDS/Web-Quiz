import React, { useState, useEffect } from 'react'

import { ProgressBar } from './ProgressBar'


export const ResultQuiz2 = ({ score, question, valid = null, scenario }) => {

    const [completed, setCompleted] = useState(0);
    const [result] = useState(((score * 100) / question.length) + valid);
    const [phrase, setPhrase] = useState('');
    const [imageUsed, setImageUsed] = useState('');


    const resultCompare = () => {
        if (result > 60 && scenario === 'Donkey') {
            setPhrase(<p>Thanks For playing!!! <br /> <i>"The End"</i></p>);
            setImageUsed('/assets/images/Secret-Ending.gif')
        } else if (result < 60 && scenario === 'Donkey') {
            setPhrase(<p>Thanks For playing!!!  <br /> <i>"The End"</i></p>);
            setImageUsed('/assets/images/looser.gif')
        }

        if (result > 60 && scenario === 'Mario') {
            setPhrase(<p>Thanks For playing!!! <br /> <i>"Thank you so much for-to-playing my game."</i></p>)
            setImageUsed('/assets/images/Secret-mario-ending')
        } else if (result < 60 && scenario === 'Mario') {
            setPhrase(<p>Thanks For playing!!!  <br /> <i>"The End"</i></p>);
            setImageUsed('/assets/images/Game-Over-Man.gif')
        }
        if (result > 60 & scenario === 'Metroid') {
            setPhrase(<p style={{ background: 'black', color: '#D93790', fontFamily: 'Silkscreen' }}>Thanks For playing!!!  <br /> <i>"The End"</i></p>);
            setImageUsed('/assets/images/Metroid-Ending.gif')
        } else if (result < 60 && scenario === 'Metroid') {
            setPhrase(<p style={{ background: 'black', color: '#D93790', fontFamily: 'Silkscreen' }}>Thanks For playing!!!   <br /> <i>"The End"</i></p>);
            setImageUsed('/assets/images/Varia-Suit.gif')
        }

        if (result > 60 && scenario === 'Zelda') {
            setPhrase(<p>Thanks For playing!!! <br /> <i>"The End"</i></p>);
            setImageUsed('/assets/images/Zelda-Ending.gif')
        } else if (result < 60 && scenario === 'Zelda') {
            setPhrase(<p>Thanks For playing!!!<br /> <i>"The End"</i></p>);
            setImageUsed('/assets/images/Zelda-Lose.gif')
        }
    }


    useEffect(() => {
        setInterval(() => setCompleted(result), 2000);
        resultCompare();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className='result-box result-box2'>

            <div className='result-left-box'>
                <div className='result-progress-bar'><ProgressBar bgcolor={'linear-gradient(To right, red 10% , yellow 50%, green 80%)'} completed={completed} /><h6>Point : {score}</h6></div>
                <div className='result-left-text  result-left-text2'>

                    <span>{phrase}</span>
                </div>
            </div>
            <div className='result-right-box2'>
                <div><img src={imageUsed} alt='HEllo' /></div>
                <div className='credits'>Created by DarkCainDs</div>
            </div>


        </div>
    )
}
