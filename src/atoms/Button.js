import styled from "styled-components";

import {Button} from "@mui/material";
import {createTheme, ThemeProvider} from "@mui/material/styles";

const theme = createTheme({
     palette: {
          primary: {
               main: "#9fa9a3",
          },
     },
});

const S = {
     StyledButton: styled(Button)`
    && {
      margin: 1%;
      color: #000000;
      border: solid #000000 1px;
      opacity: 0.7;
    `,
};

const StyledButton = ({buttonText}) => {
     return (
          <ThemeProvider theme={theme}>
               <S.StyledButton variant='contained'>{buttonText}</S.StyledButton>
          </ThemeProvider>
     );
};

export default StyledButton;
