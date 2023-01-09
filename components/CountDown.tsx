import * as React from 'react';

type Props = {};

function CountDown({}: Props) {
  const [count, setCount] = React.useState(10);
  const removeOne = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <div>
      <button onClick={() => removeOne()}> {count} </button>
    </div>
  );
}

export default CountDown;
