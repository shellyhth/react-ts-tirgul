import * as React from 'react';

type Props = {};

function Like({}: Props) {
  const [message, setMessage] = React.useState('Like');
  const likeUnlike = () => {
    if (message === 'Like') {
      setMessage('Unlike');
    } else {
      setMessage('Like');
    }
  };
  return (
    <div>
      <button onClick={() => likeUnlike()}> {message} </button>
    </div>
  );
}

export default Like;
