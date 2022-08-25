import React, { useState, useEffect } from 'react'
import { useModal } from './Hooks/useModal';
import { Quiz100 } from './Javascript/Quiz100';
import { Modal } from './Modals/Modal';
import { ProgressBar } from './ProgressBar'


export const ResultQuiz = ({ score, question, valid = null, scenario }) => {

    const [completed, setCompleted] = useState(0);
    const [result] = useState(((score * 100) / question.length) + valid);
    const [phrase, setPhrase] = useState('');
    const [lostWorld, setLostWorld] = useState(false);
    const [imageUsed, setImageUsed] = useState('');
    const [isOpenModal1, openModal1, closeModal1] = useModal(false);
    const [godMode, setGodMode] = useState('');
    const [godText, setGodText] = useState('');

    const resultCompare = () => {
        if (result === 102 && scenario === 'Donkey') {
            setPhrase(<p>What a player you are, Donkey my lad! You've beaten the Kremlings, and found absolutely everything! You're nearly as good as I used to be!! <br /> <i>"i hope these monkeys dont go to the lost world , to test his abilities"</i></p>)
            setLostWorld(true);
            setImageUsed('/assets/images/Cranky2.gif')
        } else if (result === 100 && scenario === 'Donkey') {
            setPhrase(<p>Well done Donkey my boy! Whod have thought a young whippersnapper like you could ve beaten that bunch of no good Kremlings? You ve made an old man proud! <br /> <i>"Maybe its better than me shoot"</i></p>);
            setImageUsed('/assets/images/Cranky1.gif')

        } else if (result >= 60 && result <= 99 && scenario === 'Donkey') {
            setPhrase(<p>Awesome playing, Kongs! Go get that K. Rool. He just aint cool! <br /> <i>"You know the score, hop in and high tail it!"</i></p>);
            setImageUsed('/assets/images/FunkyV2.gif')

        } else if (result < 60 && scenario === 'Donkey') {
            setPhrase(<p>I ll get you yet, you stupid monkeys Next time there will be no stopping me. Awha ha ha! <br /> <i>"Maybe need another game to  beat"</i></p>);
            setImageUsed('/assets/images/looser.gif')
        }

        if (result === 102 && scenario === 'Mario') {
            setPhrase(<p>I think I hear someone calling. What secrets does this Star hold?" <br /> <i>"Thank you so much for-to-playing my game."</i></p>)
            setLostWorld(true);
            setImageUsed('/assets/images/Star-World-Final.gif')
        } else if (result === 100 && scenario === 'Mario') {
            setPhrase(<p>Hmmm, something's not quite right here... It's so quiet... <br /> <i>"It's-a me, Mario! Mario number one!"</i></p>);
            setImageUsed('/assets/images/Star-World.gif')
        } else if (result >= 60 && result <= 99 && scenario === 'Mario') {
            setPhrase(<p>"Have you seen the Princess? PRIINCEESS! Hmm..." <br /> <i>"Okey-dokey, begin typing now!"</i></p>);
            setImageUsed('/assets/images/Castle-Crush.gif')

        } else if (result < 60 && scenario === 'Mario') {
            setPhrase(<p>Welcome! This is Dinosaur Land. In this strange land we find that Princess Toadstool is missing again! Looks like Bowser is at it again! <br /> <i>"I'm going in!"</i></p>);
            setImageUsed('/assets/images/Game-Over-Man.gif')
            
        }

        if (result === 102 && scenario === 'Metroid') {
            setPhrase(<p style={{ background: 'black', color: '#D93790', fontFamily: 'Silkscreen' }}>You find a Metroid <br /> <i>"Ahhhhh where i find energy !!!"</i></p>);
            setLostWorld(true);
            setImageUsed('/assets/images/Metroid-find.gif')
        } else if (result === 100 && scenario === 'Metroid') {
            setPhrase(<p style={{ background: 'black', color: '#D93790', fontFamily: 'Silkscreen' }}>obtained Road to MotherBrain  <br /> <i>"You are ready to beat MotherBrain"</i></p>);
            setImageUsed('/assets/images/Road-MotherBrainV2.gif')
        } else if (result >= 60 && result <= 99 && scenario === 'Metroid') {
            setPhrase(<p style={{ background: 'black', color: '#D93790', fontFamily: 'Silkscreen' }}>obtained Gravity Suit  <br /> <i>"Maybe you can beat Ridley"</i></p>);
            setImageUsed('/assets/images/Gravity-Suit.gif')

        } else if (result < 60 && scenario === 'Metroid') {
            setPhrase(<p style={{ background: 'black', color: '#D93790', fontFamily: 'Silkscreen' }}>obtained Varia Suit  <br /> <i>"Not even close to beat Mother Brain"</i></p>);
            setImageUsed('/assets/images/Varia-Suit.gif')
        }


        if (result === 102 && scenario === 'Zelda') {
            setPhrase(<p>Suddenly, Sahasrahla contacts you telepathically...!  <br /> <i>" Link it is I,Sahasrahla i am communicating to you across the void through telepathy, you are in Dark World, Holy Bunny i sense your helplessness... Before you go any further, find the Moon Pear!!"</i></p>)
            setLostWorld(true);
            setImageUsed('/assets/images/Zelda-102.gif')
        } else if (result === 100 && scenario === 'Zelda') {
            setPhrase(<p>Suddenly, Sahasrahla contacts you telepathically...! <br /> <i>"Link, it is extraordinary that you won the Master Sword that makes evil
                retreat...
                With this shining sword, I believe you can deflect the wizard's evil powers."</i></p>);
            setImageUsed('/assets/images/Zelda-Amazing.gif')
        } else if (result >= 60 && result <= 99 && scenario === 'Zelda') {
            setPhrase(<p> The Hero's triumph on Cataclysm's Eve Wins three symbols of virtue. !!!<br /> <i>"I am ready to get the Master Sword !!!"</i></p>);
            setImageUsed('/assets/images/Zelda-Great.gif')

        } else if (result < 60 && scenario === 'Zelda') {
            setPhrase(<p>It's dangerous to go alone! Take this !!! <br /> <i>"I'm Navi the fairy! The Great Deku Tree asked me to be your partner from now on! Nice to meet you!"</i></p>);
            setImageUsed('/assets/images/Zelda-Lose.gif')
        }

    }
    const scenarioButton = () => {
        if (scenario === 'Donkey') {
            setGodMode('lostWorld');
            setGodText('Lost World');
        } else if (scenario === 'Metroid') {
            setGodMode('motherBrain');
            setGodText('Mother Brain');
        } else if (scenario === 'Mario') {
            setGodMode('starWorld');
            setGodText('Star World');
        } else if (scenario === 'Zelda') {
            setGodMode('darkWorld');
            setGodText('Dark World');
        }
    }

    useEffect(() => {
        setInterval(() => setCompleted(result), 2000);
        resultCompare();
        scenarioButton();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className='result-box'>
            <div className='result-left-box'>
                <div className='result-progress-bar'><ProgressBar bgcolor={'linear-gradient(To right, red 10% , yellow 50%, green 80%)'} completed={completed} /><h6>Point : {score}</h6></div>
                <div className='result-left-text'>

                    <span>{phrase} {lostWorld ?
                        <div>
                            <button className={godMode} onClick={openModal1}>{godText}</button>
                            <Modal isOpen={isOpenModal1} closeModal={closeModal1} scenario={scenario}>
                                <Quiz100 scenario={scenario}/>
                            </Modal>
                        </div> : <></>}
                    </span>
                </div>
            </div>
            <div className='result-right-box2'>
                <div><img src={imageUsed} alt='HEllo' /></div>
                <div className='credits'>Created by DarkCainDs</div>
            </div>
        </div>
    )
}
