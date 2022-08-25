const options = [
    { value: 'Donkey Kong', label: 'Donkey Kong' },
    { value: "Mario World", label: 'Mario World' },
    { value: 'Zelda', label: 'Zelda: A link to the past' },
    { value: 'Metroid', label: 'Super Metroid' }
  ];
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      background:'linear-gradient(lightblue 25%, #58C8A8 50%, #0DB778 75%)',
      borderBottom: '1px dotted pink',
      color: state.isSelected ? 'red' : 'blue',
      padding: 20,
      
      
      


    }),
    control: () => ({
      // none of react-select's styles are passed to <Control />
      background: 'linear-gradient(lightblue 25%, #58C8A8 50%, #0DB778 75%)',
      margin: '0 auto',
      color: 'black',
      width: '250px',

      borderRadius: '20px',
      fontSize: '25px',



    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 500ms';


      return { ...provided, opacity, transition };
    }
  }
  export  {options,customStyles}; 