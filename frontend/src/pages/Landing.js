import React from 'react';
import {
    Container,
    Grid,
    SimpleGrid,
    Skeleton,
    useMantineTheme,
    MantineProvider,
    AppShell,
    Center,
    Text, Stack, Button
} from '@mantine/core';

import {HeaderResponsive} from "../components/Header";
import {SearchInput} from "../components/SearchInput";
import {Footer} from "../components/Footer";


export default function Landing(){

    const theme = useMantineTheme();
    // const [opened, setOpened] = useState(false);

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
                <HeaderResponsive links={
                        [
                            {
                                "link": "/",
                                "label": "Home"
                            },
                            {
                                "link": "/pantry",
                                "label": "Pantry"
                            },
                            {
                                "link": "/recipes",
                                "label": "Recipes"
                            },
                            {
                                "link": "/account",
                                "label": "Account"
                            }
                        ]
                    }
                />
            }
        >
            <Stack justify="space-around" spacing="sm" sx={() => ({ height: 300 })}>
                <Text style={{fontSize:"xxx-large",fontWeight:"bold"}}>Enter a recipe name or search for an ingredient</Text>
                <SearchInput/>
            </Stack>



        </AppShell>



    );

}

