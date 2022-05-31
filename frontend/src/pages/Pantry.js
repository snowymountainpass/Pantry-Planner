import {AppShell, Stack, useMantineTheme} from "@mantine/core";
import {Footer} from "../components/Footer";
import PantryTable from "../components/PantryTable";
import {HeaderWithMenu} from "../components/HeaderWithMenu";
import React from "react";

export default function Pantry() {
    const theme = useMantineTheme();

    return (
        // <p>some text</p>
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

            <PantryTable/>

        </AppShell>


    );
}