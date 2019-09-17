import { ITheme } from './theme.index';

export const customThemeDefaults: ITheme = {
  name: 'Custom Theme',
  canBeModified: true,
  invertImageIcon: false,
  colors: {
    shadow: '#000',
    primaryBg: '#1a1a1f',
    primary: '#f20a',
    primaryHover: '#d20a',
    primaryFocus: '#f20c',
    primaryFont: '#fcac',
    secondaryFont: '#fff',
    link: '#53aff3fc',
    mutedFont: '#fca8',
    icon: '#fa6c',
    muted: '#a64',
    border: '#a64a',
    button: '#53aff3fc',
    mutedHover: '#c64',
    cards: '#612720',
    secondary: '#17151f'
  },
  defaults: {
    color: 'primaryFont',
    scrollBar: {
      thumb: 'mutedHover',
      thumbHover: 'muted',
      track: 'primaryBg'
    },
    shadow: 'shadow',
    background: 'primary',
    loader: {
      accent: 'primary',
      primary: 'cards'
    },
    checkboxSwitch: {
      checked: 'primary',
      unchecked: 'icon'
    },
    sidebarActive: 'primary'
  },
  badgeColors: {
    default: '#090909',
    status: {
      Rejected: '#b00',
      Published: '#0b0',
      'Ready to Publish': '#070',
      'Ethical Question': '#50a',
      Submitted: '#24a',
      'Failed Data Check': '#a50',
      'Revisions Requested': '#ba0',
      'Technical Review': '#90a',
      'In Review': '#07c',
      'Final Review': '#a25',
      '2nd Editor Required': '#f45',
      'Passed Data Check': '#2aa'
    }
  },
  notificationColors: {
    error: '#e96e',
    fontColor: '#fff',
    info: '#3aee',
    success: '#9e9e',
    warning: '#fe6e'
  }
};

export const darkTheme: ITheme = {
  name: 'Dark Theme',
  canBeModified: false,
  invertImageIcon: false,
  colors: {
    shadow: '#b39ddb',
    primaryBg: '#131316',
    primary: '#c00',
    primaryHover: '#d00',
    primaryFocus: '#f00',
    primaryFont: '#eee',
    secondaryFont: '#eee',
    link: '#59f',
    mutedFont: '#aaa',
    icon: '#ddd',
    muted: '#777',
    border: '#555',
    button: '#333',
    mutedHover: '#555',
    cards: '#333',
    secondary: '#4C1717'
  },
  defaults: {
    color: 'primaryFont',
    scrollBar: {
      thumb: 'mutedHover',
      thumbHover: 'muted',
      track: 'primaryBg'
    },
    shadow: 'shadow',
    background: 'primary',
    loader: {
      accent: 'primary',
      primary: 'cards'
    },
    checkboxSwitch: {
      checked: 'primary',
      unchecked: 'icon'
    },
    sidebarActive: 'primary'
  },
  badgeColors: {
    default: '#090909',
    status: {
      Rejected: '#b00',
      Published: '#0b0',
      'Ready to Publish': '#070',
      'Ethical Question': '#50a',
      Submitted: '#24a',
      'Failed Data Check': '#a50',
      'Revisions Requested': '#ba0',
      'Technical Review': '#90a',
      'In Review': '#07c',
      'Final Review': '#a25',
      '2nd Editor Required': '#f45',
      'Passed Data Check': '#2aa'
    }
  },
  notificationColors: {
    error: '#e96e',
    fontColor: '#fff',
    info: '#3aee',
    success: '#9e9e',
    warning: '#fe6e'
  }
};

export const lightTheme: ITheme = {
  name: 'Light Theme',
  canBeModified: false,
  invertImageIcon: true,
  colors: {
    shadow: '#b39ddb',
    primaryBg: '#fafafa',
    primary: '#c00',
    primaryHover: '#d00',
    primaryFocus: '#f00',
    primaryFont: '#333',
    secondaryFont: '#eee',
    link: '#59f',
    mutedFont: '#444',
    icon: '#333',
    muted: '#aaa',
    border: '#ccc',
    button: '#bbb',
    mutedHover: '#666',
    cards: '#e1e1e1',
    secondary: '#4C1717'
  },
  defaults: {
    color: 'primaryFont',
    scrollBar: {
      thumb: 'mutedHover',
      thumbHover: 'muted',
      track: 'primaryBg'
    },
    shadow: 'shadow',
    background: 'primary',
    loader: {
      accent: 'primary',
      primary: 'cards'
    },
    checkboxSwitch: {
      checked: 'primary',
      unchecked: 'icon'
    },
    sidebarActive: 'primary'
  },
  badgeColors: {
    default: '#090909',
    status: {
      Rejected: '#b00',
      Published: '#0b0',
      'Ready to Publish': '#070',
      'Ethical Question': '#50a',
      Submitted: '#24a',
      'Failed Data Check': '#a50',
      'Revisions Requested': '#ba0',
      'Technical Review': '#90a',
      'In Review': '#07c',
      'Final Review': '#a25',
      '2nd Editor Required': '#f45',
      'Passed Data Check': '#2aa'
    }
  },
  notificationColors: {
    error: '#e96e',
    fontColor: '#fff',
    info: '#3aee',
    success: '#9e9e',
    warning: '#fe6e'
  }
};
