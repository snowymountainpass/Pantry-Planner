import React from 'react';
import { useFormik } from 'formik';
import {Button, TextField} from "@mui/material";
import * as Yup from "yup";
import {Center} from "@mantine/core";

export default function SignInForm(){

    const formik = useFormik({
        initialValues: {
            password:'sherlock12345',
            email: 'handle@example.com',
        },
        validationSchema: Yup.object({
            password:Yup
                .string('Enter your password')
                .min(8, 'Password should be of minimum 8 characters length')
                .max(25, 'Password should be of minimum 25 characters length')
                .required('Password is required'),
            email: Yup
                .string()
                .email('Enter a valid email')
                .required('Email is required'),
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <Center>

            <form onSubmit={formik.handleSubmit}>

                <TextField
                    fullWidth
                    id="email"
                    name="email"
                    label="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    style={{paddingBottom:30}}
                />

                <TextField
                    fullWidth
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                    style={{paddingBottom:30}}
                />

                <Button variant="contained" type={"submit"}>Sign Up</Button>
            </form>
        </Center>
    );


};

