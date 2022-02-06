import styled from 'styled-components'
import { Button } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  
  palette: {
    primary: {
      main: '#9fa9a3',
    },
  },
});

const S = {

  StyledButton: styled(Button)`
    && {
      margin: 1%;
      color: black;
      border: solid black 1px;
      opacity: 0.7;
    `,
  }

const StyledButton = ({ButtonText}) => {
    return (
      <ThemeProvider theme={theme}>
        <S.StyledButton variant="contained"  >{ButtonText}</S.StyledButton>
      </ThemeProvider>
    )
    }
  
    export default StyledButton;