//NUME RETETA, TIMP PREPARARE, NR PORTII, NR CALORII (LIGHT, AVERAGE, HEAVY)
//DACA NU POATE FI PREPARATA RETETA, ROW-UL VA AVEA UN BACKGROUND SPECIFIC (PROBABIL GRI)


import {AppShell, useMantineTheme} from "@mantine/core";
import {Footer} from "../components/Footer";
import RecipesTable from "../components/RecipesTable";
import {HeaderWithMenu} from "../components/HeaderWithMenu";
import React from "react";

export default function Recipes() {

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

            <RecipesTable/>

        </AppShell>

    );



}