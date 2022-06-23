import './App.scss';

import Key from '../key';
import { KEYS } from '../../data/keys';

function App() {
  const { topRow, middleRow, bottomRow } = KEYS;

  return (
    <div className="container">
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
