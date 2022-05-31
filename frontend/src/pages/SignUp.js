import {AppShell, useMantineTheme} from "@mantine/core";
import {Footer} from "../components/Footer";
import {HeaderWithMenu} from "../components/HeaderWithMenu";
import SignUpForm from "../components/SignUpForm";
import React from "react";

export default function SignUp(){

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

            <SignUpForm/>

        </AppShell>

    );
}



