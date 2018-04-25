module.exports = {
  config: {
    fontSize: 20,
    fontFamily: 'Menlo, "DejaVu Sans Mono", Consolas, "Lucida Console", monospace',
    cursorColor: 'rgba(255,255,255,0.8)',
    cursorShape: 'BLOCK',
    cursorBlink: false,
    foregroundColor: '#fff',
    backgroundColor: '#000',
    backgroundColor: '#121212',
    showHamburgerMenu: '',
    padding: '12px 14px',
    shell: '',
    shellArgs: ['--login'],
    bell: false,
    env: {},
    copyOnSelect: false,
    termCSS: '',
    showWindowControls: '',
    colors: {
      black: '#000000',
      red: '#ff0000',
      green: '#33ff00',
      yellow: '#ffff00',
      blue: '#0066ff',
      magenta: '#cc00ff',
      cyan: '#00ffff',
      white: '#d0d0d0',
      lightBlack: '#808080',
      lightRed: '#ff0000',
      lightGreen: '#33ff00',
      lightYellow: '#ffff00',
      lightBlue: '#0066ff',
      lightMagenta: '#cc00ff',
      lightCyan: '#00ffff',
      lightWhite: '#ffffff',
    },
    hyperTabs: {
      tabIconsColored: true,
      activityColor: '#FFD769',
      closeAlign: 'right',
    },
  },
  plugins: [
    'hyperlinks',
    'hyper-chesterish',
    'hyper-font-smoothing',
    'hyper-tabs-enhanced',
    'hyperterm-solarized-light'
  ],
};
