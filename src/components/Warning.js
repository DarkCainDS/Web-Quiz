import React from 'react'



export const Warning = () => {
  
  
  return (
    <div>
      
      <div className='Warning'>
        <div className='left'>
          <div className='red'></div><div className='blue'></div><div className='green'></div>
          <div className='red'></div><div className='blue'></div><div className='green'></div>
          <div className='blue'></div><div className='green'></div><div className='red'></div>


        </div>
        <div className='center'>
          <span>Warning</span>

          <ul>
            <li>Each question have a time the 60 seconds</li>
            <li>In the moment you choose the number of question quiz,start right away</li>
            <li>If you don't answer in the 60 second, automatically is wrong</li>
            <li>After 60 seconds only option you can choose is the next question</li>
            <li>You can review the answer in the end of the quiz</li>
            <li>Good Luck</li>
          </ul>
        </div>
        <div className='right'>
          <div className='blue'></div><div className='red'></div><div className='green'></div>
          <div className='red'></div><div className='green'></div><div className='blue'></div>
          <div className='red'></div><div className='green'></div><div className='blue'></div>


        </div>


      </div>
    </div>
  )
}
