import './App.scss';

import Key from '../key';
import { keys } from '../../data/keys';

const App = () => {
  return (
    <div className="main">
      <div className="keyboard">
        {keys.map((row, idx) => (
          <div key={idx} className="keyboard__row">
            {row.map((key) => (
              <Key key={key.code} {...key} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
