import React, {useState} from "react";
import styled from "styled-components";

import {InputLabel, MenuItem, FormControl, Select} from "@mui/material";

const S = {
     Box: styled.div`
          width: 120px;
          hight: 50px;
          background-color: #f0f0f0;
          border-radius: 5px;
          box-shadow: 6px 8px 24px #000000;
     `,
};

const InputSelect = ({setData}) => {
     const [status, setStatus] = useState("");

     const handleChange = (event) => {
          setStatus(event.target.value);
          setData(event.target.value);
     };

     return (
          <S.Box>
               <FormControl fullWidth>
                    <InputLabel id='demo-simple-select-label'>
                         Status
                    </InputLabel>
                    <Select
                         labelId='demo-simple-select-label'
                         id='demo-simple-select'
                         value={status}
                         label='Status'
                         onChange={handleChange}
                    >
                         <MenuItem value={"All"}>All</MenuItem>
                         <MenuItem value={"Alive"}>Alive</MenuItem>
                         <MenuItem value={"Dead"}>Dead</MenuItem>
                         <MenuItem value={"unknown"}>Unknown</MenuItem>
                    </Select>
               </FormControl>
          </S.Box>
     );
};

export default InputSelect;
