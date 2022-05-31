import React from 'react';
import {Footer} from "../components/Footer";
import {HeaderWithMenu} from "../components/HeaderWithMenu";
import {AppShell, useMantineTheme} from "@mantine/core";
import SignInForm from "../components/SignInForm";



export default function SignIn() {

    const theme = useMantineTheme();

    return(
        <AppShell
            styles={{
                main: {
                    background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.red[1],
                },
            }}
            fixed

            footer={
                <Footer/>
            }
            header={
                <HeaderWithMenu/>
            }
        >

            <SignInForm/>

        </AppShell>

    );


}