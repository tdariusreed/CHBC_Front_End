import React from 'react'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

const App = () => {
  //Logic
  let name = "J. Holmes";

  return (
    <>
      <Typography variant="h4">Welcome Professor {name}</Typography>
      <Tooltip title="Click me!">
        <Button variant="contained" >Click Me</Button>
      </Tooltip>
    </>
  )
}

export default App;
