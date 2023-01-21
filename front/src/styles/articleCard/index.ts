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
