import styled from 'styled-components'
import { Button } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  
  palette: {
    primary: {
      main: '#9fa9a3',
      darker: '#343290',
    },
  },
});

const S = {

StyledButton: styled(Button)`
  && {
    margin: 1%;
    color: black;
    border: solid black 1px;
    background-color: rgb(159, 169, 163, 0.6);
    
    }
  `,
}

const StyledButton = ({ButtonText}) => {
    return (
      <ThemeProvider theme={theme}>
        <S.StyledButton variant="contained" color="primary" >{ButtonText}</S.StyledButton>
      </ThemeProvider>
    )
    }
  
    export default StyledButton;