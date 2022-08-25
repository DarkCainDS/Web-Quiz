import React from 'react'
import CountUp from 'react-countup';

export const ProgressBar = (props) => {
 const { bgcolor, completed } = props;
    const containerStyles = {
        height: 20,
        width: '100%',
        backgroundColor: 'transparent',
        borderRadius: 50,
        margin: '0 auto',
        background:'rgb(0 ,0 ,0 ,0.3)',
        border:'1px solid white'
      }
    
      const fillerStyles = {
        height: '100%',
        width: `${completed}%`,
        background: bgcolor,
        borderRadius: 'inherit',
        textAlign: 'right',
        transition: 'width 3s ease-in-out',
      }
    
      const labelStyles = {
        padding: 0,
        color: 'black',
        fontWeight: 'bold',
        width:'80px'
      }
   
    return (
        <div style={containerStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}><CountUp start={0} end={completed} suffix='%'></CountUp></span>
        </div>
      </div>
    );
  };

