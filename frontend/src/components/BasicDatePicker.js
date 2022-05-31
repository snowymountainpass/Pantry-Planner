import * as React from 'react';
import DateAdapter from "@mui/lab/AdapterDateFns";
import DatePicker from "@mui/lab/DatePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import {useState} from "react";
import {TextField} from "@mui/material";

export default function BasicDatePicker() {

    const [date, setDate] = useState(new Date());

    return (
        <LocalizationProvider dateAdapter={DateAdapter} >
            <DatePicker
                value={date}
                onChange={(newValue) => setDate(newValue)}
                renderInput={(params) => <TextField {...params} />}
                inputFormat={"dd/MM/yyyy"}
            />
        </LocalizationProvider>
    );
}
