import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from '../components/Header'
import { QuizHtml } from '../components/HTML/QuizHtml'
import { QuizHtml2 } from '../components/HTML/QuizHtml2'
import { QuizHtml3 } from '../components/HTML/QuizHtml3'
import { Quiz } from '../components/Javascript/Quiz'
import { Quiz2 } from '../components/Javascript/Quiz2'
import { Quiz3 } from '../components/Javascript/Quiz3'
import { QuizCss } from '../components/CSS/QuizCss'
import { QuizCss20 } from '../components/CSS/QuizCss20'
import { QuizCss30 } from '../components/CSS/QuizCss30'
import { QuizReact } from '../components/React/QuizReact'
import { Error } from '../components/Error'



export const MyRoutes = ({scenario}) => {

    return (

        <div >

            <BrowserRouter>

                
                <Header />

                <Routes>

                    <Route path='/' element={''}/>
                    <Route path='/Javascript/10' element={<Quiz scenario={scenario}/>} />
                    <Route path='/Javascript/20' element={<Quiz2 scenario={scenario}/>} />
                    <Route path='/Javascript/30' element={<Quiz3 scenario={scenario} />} />
                    <Route path='/React/10' element={<QuizReact scenario={scenario}/>} />
                    <Route path='/Html/10' element={<QuizHtml scenario={scenario}/>} />
                    <Route path='/Html/20' element={<QuizHtml2 scenario={scenario}/>} />
                    <Route path='/Html/30' element={<QuizHtml3 scenario={scenario}/>} />
                    <Route path='/Css/10' element={<QuizCss scenario={scenario}/>} />
                    <Route path='/Css/20' element={<QuizCss20 scenario={scenario}/>} />
                    <Route path='/Css/30' element={<QuizCss30 scenario={scenario} />} />
                    <Route path='*' element={<Error />}/>


                </Routes>

                <div className='snes-buttons'>
                    <a className='reset-outer' href='/'><div className='reset'><p>power </p></div></a>
                    <a className='reset-outer' href='/'><div className='reset'><p>reset <span></span></p></div></a>
                    
                </div>

            </BrowserRouter>

        </div>
    )

}
