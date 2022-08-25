import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import useSound from 'use-sound';
import { Warning } from './Warning';
import alerta from '../components/Javascript/music/Warning.wav'
import 'animate.css';
export const Header = () => {

  const [showJavascript, setShowJavascript] = useState(false);

  const [showHtml, setShowHtml] = useState(false);
  const [showCss, setShowCss] = useState(false);
  const [warning] = useSound(alerta, { volume: 0.5 });
  const [showWarning, setShowWarning] = useState(true);
  const [showReact, setShowReact] = useState(false);
 

  useEffect(() => {

      // eslint-disable-next-line react-hooks/exhaustive-deps

    warning();
  }, [warning])


  return (
    <div >
      <div className='header'>
        <h1>Quiz Web</h1>
      </div>

      <div className='section-buttons'>
        <a className="bn bn1" href={() => false} onClick={() => { setShowHtml(true); setShowJavascript(false); setShowCss(false); setShowReact(false); }}><span className="bn31span">HTML</span></a>
        <a className="bn bn2" href={() => false} onClick={() => { setShowCss(true); setShowHtml(false); setShowJavascript(false); setShowReact(false); }}><span className="bn31span">CSS</span></a>
        <a className="bn bn3" href={() => false} onClick={() => { setShowJavascript(true); setShowHtml(false); setShowCss(false); setShowReact(false); }}><span className="bn31span">Javascript</span></a>
        <a className="bn bn4" href={() => false} onClick={() => { setShowReact(true); setShowJavascript(false); setShowHtml(false); setShowCss(false); }}><span className="bn31span">React</span></a>

      </div>
      {showWarning ? <div className="animate__animated  animate__zoomInRight"> (<Warning />) </div>: <div></div>}
      <div >

        {showHtml ? (
          <div className="animate__animated animate__flipInX" >



            <div className='number-question'><h1>Number of Questions !!!</h1></div>
            <div className='section-buttons section-number'>
              <Link to="/Html/10"><button className='bn bn1' onClick={() => { setShowWarning(false) }}><span className="bn31span">10</span></button></Link>
              <Link to="/Html/20"><button className='bn bn1' onClick={() => { setShowWarning(false) }}><span className="bn31span">20</span></button></Link>
              <Link to="/Html/30"><button className='bn bn1' onClick={() => { setShowWarning(false) }}><span className="bn31span">30</span></button></Link>
            </div>

          </div>
        ) : (<div></div>)}
      </div>
      <div >

        {showCss ? (
          <div className="animate__animated animate__flipInX" >

            <div className='number-question'><h1>Number of Questions !!!</h1></div>
            <div className='section-buttons section-number'>
              <Link to="/Css/10"><button className='bn bn2' onClick={() => { setShowWarning(false) }}><span className="bn31span">10</span></button></Link>
              <Link to="/Css/20"><button className='bn bn2' onClick={() => { setShowWarning(false) }}><span className="bn31span">20</span></button></Link>
              <Link to="/Css/30"><button className='bn bn2' onClick={() => { setShowWarning(false) }}><span className="bn31span">30</span></button></Link>
            </div>

          </div>
        ) : (<div></div>)}
      </div>
      <div >

        {showJavascript ? (
          <div className="animate__animated animate__flipInX" >

            <div className='number-question'><h1>Number of Questions !!!</h1></div>
            <div className='section-buttons section-number'>
              <Link to="/Javascript/10"><button className='bn bn3' onClick={() => { setShowWarning(false) }}><span className="bn31span">10</span></button></Link>
              <Link to="/Javascript/20"><button className='bn bn3' onClick={() => { setShowWarning(false) }}><span className="bn31span">20</span></button></Link>
              <Link to="/Javascript/30"><button className='bn bn3' onClick={() => { setShowWarning(false) }}><span className="bn31span">30</span></button></Link>
            </div>

          </div>
        ) : (<div></div>)}
      </div>

      <div >

        {showReact ? (
          <div className="animate__animated animate__flipInX" >

            <div className='number-question'><h1>Number of Questions !!!</h1></div>
            <div className='section-buttons section-number'>
              <Link to="/React/10"><button className='bn bn4' onClick={() => { setShowWarning(false) }}><span className="bn31span">10</span></button></Link>

            </div>

          </div>
        ) : (<div></div>)}
      </div>
    
      
    </div>
  )
}

