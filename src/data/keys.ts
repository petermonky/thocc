export interface KeyProps {
  isLarge: boolean;
  display: string;
  code: string;
  width: number;
}

const keySizes = {
  small: 48,
  medium: 60,
  backspace: 100,
  tab: 76,
  backslash: 72,
  capsLock: 88,
  enter: 116,
  shiftLeft: 116,
  shiftRight: 88,
  space: 376,
};

export const keys: KeyProps[][] = [
  [
    {
      isLarge: false,
      display: '` ~',
      code: 'Backquote',
      width: keySizes.small,
    },
    { isLarge: false, display: '1 !', code: 'Digit1', width: keySizes.small },
    { isLarge: false, display: '2 @', code: 'Digit2', width: keySizes.small },
    { isLarge: false, display: '3 #', code: 'Digit3', width: keySizes.small },
    { isLarge: false, display: '4 $', code: 'Digit4', width: keySizes.small },
    { isLarge: false, display: '5 %', code: 'Digit5', width: keySizes.small },
    { isLarge: false, display: '6 ^', code: 'Digit6', width: keySizes.small },
    { isLarge: false, display: '7 &', code: 'Digit7', width: keySizes.small },
    { isLarge: false, display: '8 *', code: 'Digit8', width: keySizes.small },
    { isLarge: false, display: '9 (', code: 'Digit9', width: keySizes.small },
    { isLarge: false, display: '0 )', code: 'Digit0', width: keySizes.small },
    { isLarge: false, display: '- _', code: 'Minus', width: keySizes.small },
    { isLarge: false, display: '= +', code: 'Equal', width: keySizes.small },
    {
      isLarge: false,
      display: '⟵',
      code: 'Backspace',
      width: keySizes.backspace,
    },
    {
      isLarge: false,
      display: 'Del',
      code: 'Delete',
      width: keySizes.small,
    },
  ],
  [
    { isLarge: false, display: 'Tab ↹', code: 'Tab', width: keySizes.tab },
    { isLarge: true, display: 'Q', code: 'KeyQ', width: keySizes.small },
    { isLarge: true, display: 'W', code: 'KeyW', width: keySizes.small },
    { isLarge: true, display: 'E', code: 'KeyE', width: keySizes.small },
    { isLarge: true, display: 'R', code: 'KeyR', width: keySizes.small },
    { isLarge: true, display: 'T', code: 'KeyT', width: keySizes.small },
    { isLarge: true, display: 'Y', code: 'KeyY', width: keySizes.small },
    { isLarge: true, display: 'U', code: 'KeyU', width: keySizes.small },
    { isLarge: true, display: 'I', code: 'KeyI', width: keySizes.small },
    { isLarge: true, display: 'O', code: 'KeyO', width: keySizes.small },
    { isLarge: true, display: 'P', code: 'KeyP', width: keySizes.small },
    {
      isLarge: false,
      display: '[ {',
      code: 'BracketLeft',
      width: keySizes.small,
    },
    {
      isLarge: false,
      display: '] }',
      code: 'BracketRight',
      width: keySizes.small,
    },
    {
      isLarge: false,
      display: '\\ |',
      code: 'Backslash',
      width: keySizes.backslash,
    },
    { isLarge: false, display: 'Home', code: 'Home', width: keySizes.small },
  ],
  [
    {
      isLarge: false,
      display: 'CapsLock',
      code: 'CapsLock',
      width: keySizes.capsLock,
    },
    { isLarge: true, display: 'A', code: 'KeyA', width: keySizes.small },
    { isLarge: true, display: 'S', code: 'KeyS', width: keySizes.small },
    { isLarge: true, display: 'D', code: 'KeyD', width: keySizes.small },
    { isLarge: true, display: 'F', code: 'KeyF', width: keySizes.small },
    { isLarge: true, display: 'G', code: 'KeyG', width: keySizes.small },
    { isLarge: true, display: 'H', code: 'KeyH', width: keySizes.small },
    { isLarge: true, display: 'J', code: 'KeyJ', width: keySizes.small },
    { isLarge: true, display: 'K', code: 'KeyK', width: keySizes.small },
    { isLarge: true, display: 'L', code: 'KeyL', width: keySizes.small },
    {
      isLarge: false,
      display: '; :',
      code: 'Semicolon',
      width: keySizes.small,
    },
    { isLarge: false, display: '\' "', code: 'Quote', width: keySizes.small },
    {
      isLarge: false,
      display: 'Enter ↵',
      code: 'Enter',
      width: keySizes.enter,
    },
    { isLarge: false, display: 'PgUp', code: 'PageUp', width: keySizes.small },
  ],
  [
    {
      isLarge: false,
      display: 'Shift ⇧',
      code: 'ShiftLeft',
      width: keySizes.shiftLeft,
    },
    { isLarge: true, display: 'Z', code: 'KeyZ', width: keySizes.small },
    { isLarge: true, display: 'X', code: 'KeyX', width: keySizes.small },
    { isLarge: true, display: 'C', code: 'KeyC', width: keySizes.small },
    { isLarge: true, display: 'V', code: 'KeyV', width: keySizes.small },
    { isLarge: true, display: 'B', code: 'KeyB', width: keySizes.small },
    { isLarge: true, display: 'N', code: 'KeyN', width: keySizes.small },
    { isLarge: true, display: 'M', code: 'KeyM', width: keySizes.small },
    { isLarge: false, display: ', <', code: 'Comma', width: keySizes.small },
    { isLarge: false, display: '. >', code: 'Period', width: keySizes.small },
    { isLarge: false, display: '/ ?', code: 'Slash', width: keySizes.small },
    {
      isLarge: false,
      display: 'Shift ⇧',
      code: 'ShiftRight',
      width: keySizes.shiftRight,
    },
    {
      isLarge: true,
      display: '↑',
      code: 'ArrowUp',
      width: keySizes.small,
    },
    {
      isLarge: false,
      display: 'PgDn',
      code: 'PageDown',
      width: keySizes.small,
    },
  ],
  [
    {
      isLarge: false,
      display: 'Ctrl',
      code: 'ControlLeft',
      width: keySizes.medium,
    },
    {
      isLarge: false,
      display: 'Meta',
      code: 'MetaLeft',
      width: keySizes.medium,
    },
    {
      isLarge: false,
      display: 'Alt',
      code: 'AltLeft',
      width: keySizes.medium,
    },
    { isLarge: false, display: '', code: 'Space', width: keySizes.space },
    {
      isLarge: false,
      display: 'Alt',
      code: 'AltRight',
      width: keySizes.medium,
    },
    {
      isLarge: false,
      display: 'Ctrl',
      code: 'ControlRight',
      width: keySizes.medium,
    },
    {
      isLarge: true,
      display: '←',
      code: 'ArrowLeft',
      width: keySizes.small,
    },
    {
      isLarge: true,
      display: '↓',
      code: 'ArrowDown',
      width: keySizes.small,
    },
    {
      isLarge: true,
      display: '→',
      code: 'ArrowRight',
      width: keySizes.small,
    },
  ],
];

interface ThemeProps {
  name: string;
  display: string;
  color: string;
}

export const themes: ThemeProps[] = [
  {
    name: 'normal',
    display: 'Default',
    color: 'black',
  },
  {
    name: 'discord',
    display: 'Discord',
    color: '#5865f2',
  },
  {
    name: 'duolingo',
    display: 'Duolingo',
    color: '#58cc02',
  },
];
