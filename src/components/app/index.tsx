import { useState } from 'react';

import './App.scss';
import clsx from 'clsx';

import Key from '../key';
import ThemeMenu from '../themeMenu';
import { keys } from '../../data/keys';

const App = () => {
  const [theme, setTheme] = useState('normal');

  const handleThemeChange =
    (newTheme: string) => (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      setTheme(newTheme);
    };

  return (
    <div className={clsx('main', theme)}>
      <ThemeMenu theme={theme} setTheme={handleThemeChange} />
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
