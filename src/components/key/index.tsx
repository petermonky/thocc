import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { KeyProps } from '../../data/keys';

import './Key.scss';

const Key: React.FC<KeyProps> = ({
  isLarge: isLetter,
  display,
  code,
  width,
}) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const keyCheck = (cb: () => void) => (event: KeyboardEvent) => {
      if (event.code === code) {
        event.preventDefault();
        cb();
      }
    };

    const keyDownListener = keyCheck(() => setActive(true));
    const keyUpListener = keyCheck(() => setActive(false));

    document.addEventListener('keydown', keyDownListener);
    document.addEventListener('keyup', keyUpListener);

    return () => {
      document.removeEventListener('keydown', keyDownListener);
      document.removeEventListener('keyup', keyUpListener);
    };
  }, [code]);

  return (
    <button
      className={clsx(active && 'active', isLetter && 'letter', 'unselectable')}
      style={{ width: width }}
    >
      {display}
    </button>
  );
};

export default Key;
