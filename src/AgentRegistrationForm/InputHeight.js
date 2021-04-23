import React from 'react'
import { TextField } from '@material-ui/core';

export default function InputHeight(props) {

    const { ref,name, label, value,error=null, onChange, height } = props;
    return (
        <TextField
        multiline={true}
        rows={5}
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