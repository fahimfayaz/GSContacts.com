import React from 'react'
import { TextField } from '@material-ui/core';

export default function Input(props) {

    const { ref,name, label, value,error=null, onChange } = props;
    return (
        <TextField
            variant="outlined"
            label={label}
            name={name}
            ref={ref}
            value={value}
            onChange={onChange}
            {...(error && {error:true,helperText:error})}
        />
    )
}