import styles from './InputBlock.module.css';
// import * as React from 'react';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';

type InputBlockProps = {
  message?: string;
};

export const InputBlock = ({ message = '' }: InputBlockProps) => {
  return (
    <div className={styles.container}>
      {message && <span className={styles.title}>{message}</span>}
      <input className={styles.item}type="text" />
  </div>
  );
};

{/* <Box
component="form"
sx={{
  width: '90%',
  padding: '12px',
  display: 'flex',
  placeContent: 'center',
  placeItems: 'start',
  flexDirection: 'column'
}}
className={styles.container}
noValidate
autoComplete="off">
<TextField 
  id="outlined-basic" 
  label={message} 
  variant="outlined"
  sx={{
    width: '100%',
    height: '48px',
    borderRadius: '12px',
    color: 'rgba(226, 226, 226, 1)'
  }}
  />
</Box> */}
