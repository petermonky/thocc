import { useEffect } from 'react';
import './App.scss';

import Key from '../key';
import { KEYS } from '../../data/keys';

function App() {
  const { numRow, topRow, middleRow, bottomRow } = KEYS;

  useEffect(() => {
    const keyDownListener = (event: KeyboardEvent) => event.preventDefault();

    document.addEventListener('keydown', keyDownListener);

    return () => document.removeEventListener('keydown', keyDownListener);
  });

  return (
    <div className="container">
      <div>
        {numRow.map((key) => (
          <Key key={key} letter={key} />
        ))}
      </div>
      <div>
        {topRow.map((key) => (
          <Key key={key} letter={key} />
        ))}
      </div>
      <div>
        {middleRow.map((key) => (
          <Key key={key} letter={key} />
        ))}
      </div>
      <div>
        {bottomRow.map((key) => (
          <Key key={key} letter={key} />
        ))}
      </div>
    </div>
  );
}

export default App;
