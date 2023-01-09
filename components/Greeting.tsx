import * as React from 'react';

type Props = {};

function Greeting({}: Props) {
  const [input, setInput] = React.useState('');
  const[clicked,setClicked] = React.useState(input)
  const updateMessage = (event) => {
    setInput(event.target.value);
  };
  const handleClick=()=>{
    setClicked(input)
  }
  return (
    <div>
      <input type="text" name="name" onChange={updateMessage} value={input} />
      <h1>Hello,{clicked}</h1>
      <button onClick={handleClick}>click </button>
      
    </div>
  );
}

export default Greeting;
