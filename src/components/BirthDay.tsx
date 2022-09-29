import * as React from 'react';
import {Box} from "@material-ui/core";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DatePicker} from "@mui/x-date-pickers";
import dayjs, { Dayjs } from 'dayjs';


export default function BirthDay() {
    const [value, setValue] = React.useState<Dayjs | null>(dayjs());

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
                label="Custom input"
                value={value}
                onChange={(newValue) => {
                    setValue(newValue);
                }}
                renderInput={({ inputRef, inputProps, InputProps }) => (
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <input ref={inputRef} {...inputProps} />
                        {InputProps?.endAdornment}
                    </Box>
                )}
            />
        </LocalizationProvider>
    );
}
