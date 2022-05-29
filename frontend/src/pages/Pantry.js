import {AppShell, Stack, useMantineTheme} from "@mantine/core";
import {Footer} from "../components/Footer";
import {HeaderResponsive} from "../components/Header";
import PantryTable from "../components/PantryTable";

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

            <PantryTable/>

        </AppShell>


    );
}