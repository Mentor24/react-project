import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import styled from 'styled-components'

const S = {

    Box: styled.div`
    width: 120px;
    hight: 50px;
    background-color: #f0f0f0;
    border-radius: 5px;
    box-shadow: 6px 8px 24px black;
    `,
}

export default function BasicSelect() {
  const [status, setStatus] = React.useState('');

  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  return (
    <S.Box>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Status</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={status}
          label="Status"
          onChange={handleChange}
        >
          <MenuItem value={10}>Alive</MenuItem>
          <MenuItem value={20}>Dead</MenuItem>
          <MenuItem value={30}>Unknown</MenuItem>
        </Select>
      </FormControl>
    </S.Box>
  );
}