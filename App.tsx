import * as React from 'react';
import CountDown from './components/CountDown';
import Greeting from './components/Greeting';
import Like from './components/Like';
import './style.css';

export default function App() {
  return (
    <div>
      <CountDown/>
      <Like/>
      <Greeting/>
    </div>
  );
}
