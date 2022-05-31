import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {Button, TextField} from "@mui/material";
import {Center} from "@mantine/core";

export default function SignupForm() {
    const formik = useFormik({
        initialValues: {
            firstName: 'Gregory',
            lastName: 'House',
            username:'housemd1953',
            password:'sherlock12345',
            email: 'handle@example.com',
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(15, 'Must be 20 characters or less')
                .required('Required'),
            lastName: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Required'),
            username:Yup.string('Enter your email')
                .min(8, 'Username should be of minimum 8 characters length')
                .max(25, 'Username should be of minimum 25 characters length')
                .required('Username is required'),
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
                    id="firstName"
                    name="firstName"
                    label="First Name"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                    helperText={formik.touched.firstName && formik.errors.firstName}
                    style={{paddingBottom:30}}
                />
                <TextField
                    fullWidth
                    id="lastName"
                    name="lastName"
                    label="Last Name"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                    helperText={formik.touched.lastName && formik.errors.lastName}
                    style={{paddingBottom:30}}
                />
                <TextField
                    fullWidth
                    id="username"
                    name="username"
                    label="Username"
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    error={formik.touched.username && Boolean(formik.errors.username)}
                    helperText={formik.touched.username && formik.errors.username}
                    style={{paddingBottom:30}}
                />


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