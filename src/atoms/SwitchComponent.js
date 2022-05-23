import React, { useState } from "react";

import Switch from '@mui/material/Switch';

const SwitchComponent = ({setShift}) => {

  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    setShift(event.target.checked);
  };

  return (
    <Switch
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />
  );
}

export default SwitchComponent