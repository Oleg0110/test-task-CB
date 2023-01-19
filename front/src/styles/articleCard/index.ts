import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const DateTypography = styled(Typography)(() => ({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
})) as typeof Typography;

export const TitleTypography = styled(Typography)(() => ({
  margin: '24px 0px 20px 0px',
  height: '58px',
  overflow: 'hidden',
})) as typeof Typography;

export const SummaryTypography = styled(Typography)(() => ({
  margin: '20px 0px',
  height: '96px',
})) as typeof Typography;

// export const UserOrdersBox = styled(Box)(() => ({
//   width: '65%',
//   alignItems: 'center',
//   display: 'flex',
//   flexDirection: 'column',
//   padding: '10px 10px 0px',
//   borderRadius: '3px',
//   border: `1px solid ${Colors.secondaryWhite}`,
//   margin: '10px',
// })) as typeof Box;

// export const UserTypographyBox = styled(Box)(() => ({
//   display: 'flex',
//   justifyContent: 'start',
//   alignItems: 'center',
//   width: '100%',
//   padding: '12px',
//   position: 'relative',
//   [theme.breakpoints.down('md')]: {
//     padding: '5px',
//   },
// })) as typeof Box;

// export const TypographyUserOffice = styled(Typography)(() => ({
//   fontFamily: 'Roboto',
//   fontSize: '20px',
//   fontWeight: 400,
//   color: Colors.secondaryWhite,
//   lineHeight: '28.13px',
//   textAlign: 'start',
//   width: '30%',
//   [theme.breakpoints.down('md')]: {
//     fontSize: '16px',
//   },
//   [theme.breakpoints.down('sm')]: {
//     fontSize: '14px',
//   },
// })) as typeof Typography;

// export const TypographyUserDataOffice = styled(Typography)(() => ({
//   fontFamily: 'Roboto',
//   fontSize: '24px',
//   fontWeight: 200,
//   color: Colors.secondaryWhite,
//   lineHeight: '28.13px',
//   textAlign: 'start',
//   [theme.breakpoints.down('md')]: {
//     fontSize: '16px',
//   },
//   [theme.breakpoints.down('sm')]: {
//     fontSize: '14px',
//   },
// })) as typeof Typography;

// export const OfficeLine = styled(Box)(() => ({
//   borderTop: `1px solid ${Colors.secondaryWhite}`,
//   width: '100%',
//   marginLeft: '20px',
// })) as typeof Box;

// export const UserOrdersScrollBox = styled(Box)(() => ({
//   width: '100%',
//   maxHeight: '420px',
//   overflowY: 'scroll',
//   '&::-webkit-scrollbar': {
//     width: '15px',
//   },
//   '&::-webkit-scrollbar-track': {
//     background: Colors.primary,
//     borderRadius: '10px',
//   },
//   '&::-webkit-scrollbar-thumb': {
//     backgroundColor: Colors.lightGray,
//     border: `4px solid ${Colors.primary}`,
//     borderRadius: '10px',
//   },
// })) as typeof Box;

// export const UserProductsOrdersBox = styled(Box)(() => ({
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   padding: '5px',
//   width: '100%',
//   flexDirection: 'column',
//   marginBottom: '10px',
// })) as typeof Box;

// export const ChangeUserInputBox = styled(Box)(() => ({
//   display: 'flex',
//   position: 'relative',
//   width: '50%',
//   marginLeft: '7%',
// })) as typeof Box;

// export const ChangeUserErrorMessage = styled(ErrorMessage)(() => ({
//   position: 'absolute',
//   top: '28px',
//   left: '5px',
//   color: '#e64848',
//   fontSize: '12px',
// })) as typeof ErrorMessage;

// export const InputChangeUser = styled(Field)(() => ({
//   width: '100%',
//   fontFamily: 'Roboto',
//   fontSize: '24px',
//   fontWeight: 200,
//   color: Colors.secondaryWhite,
//   lineHeight: '28.13px',
//   background: Colors.primary,
//   border: `1px solid ${Colors.secondaryWhite}`,
//   paddingLeft: '10px',
// })) as typeof Field;

// export const LoadingPosition = styled(Box)(() => ({
//   position: 'absolute',
//   top: '8%',
//   right: '-35px',
// })) as typeof Box;

// export const CheckBoxButton = styled(Button)(() => ({
//   position: 'absolute',
//   top: '-10px',
//   right: '-55px',
//   background: 'Transparent',
//   border: '0px',
//   padding: '0px',
//   ':hover': {
//     background: 'Transparent',
//     border: '0px',
//   },
// }));
