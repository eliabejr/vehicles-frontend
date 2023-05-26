export const colors = {
  primary: '#ffbf3a',
  yellow: '#E8BA41',
  green: '#3ba250',
  gray: '#979797',
  gray900: '#1A1F36',
  greylight: '#F5F5F5',
  error: '#FF6347',
  cancel: '#FF6347',
  darkful: '#000000',
  dark900: '#111826',
  dark800: '#1f2936',
  dark700: '#374150',
  dark600: '#212124',
  dark500: '#6b778c',
  darkmedium: '#4F4F4F',
  lightful: '#ffffff',
  light100: '#f1f1f1',
  light150: '#F1F6FC',
  light200: '#E2E8F0',
  light300: '#d1d5da',
  light400: '#9ca3ae',
  blue: '#5B8FF9',
}

export const sizes = {
  full: '100%',
  fullWidth: '100vw',
  fullHeight: '100vh',
  s1: '0.25rem',
  s2: '0.5rem',
  s3: '0.75rem',
  s4: '1rem',
  s5: '1.25rem',
  s6: '1.5rem',
  s7: '1.75rem',
  s8: '2rem',
}

export const border = {
  sm: '1px',
  md: '3px',
  lg: '12px',
  radius: {
    sm: '2px',
    md: '4px',
    lg: '10px',
  },
}

export const font = {
  sizes: {
    xl: '3rem',
    lg: '2.5rem',
    md: '1.8rem',
    sm: '1.2rem',
    minimun: '0.9rem',
    label: '0.8rem',
    regular: '1rem',
    lineHeight: '1.3rem',
  },
  family: {
    default: 'Inter, sans-serif',
  },
  weight: {
    thin: '300',
    regular: '400',
    semiBold: '500',
    bold: '700',
    black: '900',
  },
}

export const styles = {
  Button: {
    padding: '8px 20px',
    backgroundColor: colors.yellow,
    border: '2px solid transparent',
    borderRadius: '3px!important',
    boxShadow: '0px 0px 5px #3030301f',
    font: '14px',
    transition: '.20s',
    '&:hover': {
      boxShadow: 'none',
      transform: 'translateY(3px)',
      opacity: '0.9',
    },
  },
}
