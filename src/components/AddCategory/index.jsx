import { useState } from 'react';

export function AddCategory ({ onNewCateory }) {

  const [ inputValue, setInputValue ] = useState('');

  const onInputChange = (event) => {
     setInputValue( event.target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    const newValue = inputValue.trim();

    if( newValue <= 1 ) return;
    
    onNewCateory(newValue);
    setInputValue('');
  }

  return(
    <form onSubmit={onSubmit} aria-label="form">
      <input 
        type= "text"
        placeholder= "search gifs"
        value={ inputValue }
        onChange={onInputChange}
      />
    </form>
  );
}
