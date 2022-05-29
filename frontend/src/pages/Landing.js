import React from 'react';
import {
    useMantineTheme,
    AppShell,
    Text, Stack,
} from '@mantine/core';

import {HeaderResponsive} from "../components/Header";
import {SearchInput} from "../components/SearchInput";
import {Footer} from "../components/Footer";


export default function Landing(){

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
                <HeaderResponsive/>
            }
        >
            <Stack justify="space-around" spacing="sm" sx={() => ({ height: 300 })}>
                <Text style={{fontSize:"xxx-large",fontWeight:"bold"}}>Enter a recipe name or search for an ingredient</Text>
                <SearchInput/>
            </Stack>

        </AppShell>

    );

}

