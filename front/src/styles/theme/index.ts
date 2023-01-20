// import type {} from '@mui/lab/themeAugmentation';
import { createTheme } from '@mui/material/styles';

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    titleFont: true;
    articleFont: true;
    lightFont: true;
    dateFont: true;
    boldFont: true;
    buttonFont: true;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsSizeOverrides {
    XL: true;
    LG: true;
    MD: true;
    SM: true;
    XS: true;
  }
}

export const Colors = {
  //Main colors
  mainWhite: '#e5e5e5',
  mainBlack: '#363636',
  border: '#eaeaea',
  white: '#fff',
  black: '#000',
  inputTitle: '#575757',
  keyWord: '#fff619a1',
  shadow: '#0000000D',
};

export const defaultTheme = createTheme({
  breakpoints: {
    values: {
      // extra-small
      xs: 420,
      // small
      sm: 600,
      // medium
      md: 900,
      // large
      lg: 1200,
      // extra-large
      xl: 1920,
    },
  },
});

const { breakpoints } = defaultTheme;

const theme = createTheme({
  ...defaultTheme,
  components: {
    MuiContainer: {
      defaultProps: {
        disableGutters: true,
        maxWidth: false,
      },
    },
    MuiButton: {
      variants: [
        {
          props: { color: 'primary' },
          style: {
            fontWeight: 700,
            fontSize: '16px',
            color: Colors.mainBlack,
            backgroundColor: 'transparent',
            padding: '0px',
            textTransform: 'none',
            height: 25,
          },
        },
      ],
    },
    MuiTextField: {
      variants: [
        {
          props: { variant: 'outlined' },
          style: {
            '& .MuiOutlinedInput-root:hover': {
              '& > fieldset': {
                borderColor: Colors.mainBlack,
              },
            },
            '& .MuiOutlinedInput-root.Mui-focused': {
              '& > fieldset': {
                borderColor: Colors.mainBlack,
              },
            },
            '& .MuiOutlinedInput-root': {
              fontFamily: 'Montserrat',
              color: Colors.inputTitle,
              fontWeight: 400,
              fontSize: 16,
              '& > fieldset': {
                borderRadius: '5px',
                border: `1px solid ${Colors.border}`,
              },
            },
            '& .MuiInputBase-root': {
              width: 600,
              height: 50,
              padding: '13px 20px 13px 60px',
              color: Colors.inputTitle,
            },
          },
        },
      ],
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          height: 24,
          padding: '0px 0px 0px 0px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          width: 400,
          height: 530,
          marginBottom: 45,
          borderRadius: 5,
          border: `1px solid ${Colors.border}`,
          boxShadow: `0px 8px 24px ${Colors.shadow}`,
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: { textAlign: 'start', padding: '25px 25px 0px 25px' },
      },
    },
    MuiCircularProgress: {
      styleOverrides: {
        root: {
          color: Colors.black,
          position: 'absolute',
          transform: 'translate(-50%, -55%)',
          top: '50%',
          left: '50%',
        },
      },
    },
    MuiTypography: {
      variants: [
        {
          props: { variant: 'titleFont' },
          style: {
            fontWeight: 400,
            fontSize: '24px',
            color: Colors.mainBlack,
          },
        },
        {
          props: { variant: 'articleFont' },
          style: {
            fontWeight: 300,
            fontSize: '20px',
            color: Colors.mainBlack,
            width: '100%',
          },
        },
        {
          props: { variant: 'boldFont' },
          style: {
            fontSize: '36px',
            fontWeight: 400,
            color: Colors.black,
          },
        },
        {
          props: { variant: 'dateFont' },
          style: {
            fontWeight: 400,
            fontSize: '14px',
            color: Colors.mainBlack,
            opacity: 0.6,
          },
        },
        {
          props: { variant: 'lightFont' },
          style: {
            fontSize: '20px',
            fontWeight: 200,
            color: Colors.black,
          },
        },
        {
          props: { variant: 'buttonFont' },
          style: {
            fontSize: '16px',
            fontWeight: 700,
            color: Colors.mainBlack,
          },
        },
      ],
    },
  },
  typography: {
    h1: {
      fontSize: '50px',
      fontWeight: 300,
      lineHeight: '75px',
      fontStyle: 'normal',
    },
    h2: {
      fontWeight: 300,
      fontSize: '20px',
      color: Colors.black,
      cursor: 'pointer',
      width: '100%',
      ':hover': {
        color: Colors.black,
      },
    },
  },
});

export default theme;
