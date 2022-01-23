import styled from 'styled-components'
import { TextField } from '@mui/material'

const S = {

StyledTextField: styled(TextField)`
    && {
      color: black;

    }
    `,
}

const StyledTextField = ({label}) => {
    return (

      <S.StyledTextField id="outlined-basic" label={label} variant="outlined"/>
    )
    }
  
    export default StyledTextField;