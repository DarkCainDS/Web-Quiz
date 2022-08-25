import React from 'react'

import '../components/Styles/card.css';

export const Card = ({ title, texto, portrait, action}) => {


    return (


            <div>
                <div className='card'>
                    <a href={() => false} onClick={action}><img src={portrait} alt='card'></img></a>

                    <div className='con-text'>
                        <h2>
                            {title}
                        </h2>
                        <p>{texto}

                        </p>
                    </div>
                </div>

            </div>

    )


}
