import React, { useEffect, useState } from 'react';
import clsx from 'clsx';

import './Key.scss';

interface KeyProps {
  letter: string;
}

const Key: React.FC<KeyProps> = ({ letter }) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const keyDownListener = (event: KeyboardEvent) => {
      if (event.key === letter.toLowerCase()) {
        setActive(true);
      }
    };
    const keyUpListener = (event: KeyboardEvent) => {
      if (event.key === letter.toLowerCase()) {
        setActive(false);
      }
    };

    document.addEventListener('keydown', keyDownListener);
    document.addEventListener('keyup', keyUpListener);

    return () => {
      document.removeEventListener('keydown', keyDownListener);
      document.removeEventListener('keyup', keyUpListener);
    };
  }, [letter]);

  return <button className={clsx(active && 'active')}>{letter}</button>;
};

export default Key;
