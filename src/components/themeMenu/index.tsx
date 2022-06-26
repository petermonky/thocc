import clsx from 'clsx';
import './ThemeMenu.scss';

import { themes } from '../../data/keys';
import nameToIcon from '../../utils/nameToIcon';

interface ThemeMenuProps {
  theme: string;
  setTheme: (
    newTheme: string
  ) => (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const ThemeMenu: React.FC<ThemeMenuProps> = ({ theme, setTheme }) => {
  return (
    <div className="theme-menu">
      {themes.map(({ name, display, color }) => (
        <div className="theme-menu__item">
          <button
            key={name}
            className={clsx(
              'theme-menu__item__button',
              theme === name && 'active'
            )}
            onClick={setTheme(name)}
            style={{ color }}
          >
            {nameToIcon(name)}
          </button>
          <div className="theme-menu__item__label">{display}</div>
        </div>
      ))}
    </div>
  );
};

export default ThemeMenu;
