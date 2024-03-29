import * as React from "react";

import InputUnstyled from "@mui/base/InputUnstyled";
import {styled} from "@mui/system";

const StyledInputElement = styled("input")(
     () => `
  width: 300px;
  font-size: 0.875rem;
  font-family: IBM Plex Sans, sans-serif;
  font-weight: 400;
  line-height: 1.5;
  color: black;
  border: 1px solid #000000;
  border-radius: 8px;
  padding: 12px 12px;
  background-color: rgb(240, 240, 240, 0.5);

  &:hover {
    background-color: rgb(240, 240, 240, 0.7);
    border: 1px solid #000000;
  }

  &:focus {
    outline: none;
    background-color: rgb(240, 240, 240, 0.7);
    border: 1px solid #000000;
  }
`
);

const StyledTextField = React.forwardRef(function StyledTextField(props, ref) {
     return (
          <InputUnstyled
               components={{Input: StyledInputElement}}
               {...props}
               ref={ref}
          />
     );
});

const UnstyledInput = ({label}) => {
     return <StyledTextField placeholder={label} />;
};

export default UnstyledInput;
