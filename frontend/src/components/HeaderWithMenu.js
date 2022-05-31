import React from 'react';
import {createStyles, Header, Menu, Group, Center, Burger, Container, Paper, Transition} from '@mantine/core';
import { useBooleanToggle } from '@mantine/hooks';
import { ChevronDown } from 'tabler-icons-react';
import HomePantry from "../assets/img/HomePantry.png";
import {useState} from "react";

const HEADER_HEIGHT = 95;

const useStyles = createStyles((theme) => ({
    root: {
        position: 'relative',
        zIndex: 1,
        backgroundColor: theme.colors.blue[9]
    },

    dropdown: {
        position: 'absolute',
        top: HEADER_HEIGHT,
        left: 0,
        right: 0,
        zIndex: 0,
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
        borderTopWidth: 0,
        overflow: 'hidden',

        [theme.fn.largerThan('sm')]: {
            display: 'none',
        },
    },

    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100%',
    },

    links: {
        [theme.fn.smallerThan('sm')]: {
            display: 'none',
        },
    },

    burger: {
        [theme.fn.largerThan('sm')]: {
            display: 'none',
        },
    },

    link: {
        display: 'block',
        lineHeight: 1,
        padding: '8px 12px',
        borderRadius: theme.radius.sm,
        textDecoration: 'none',
        // color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
        color: theme.colorScheme === 'dark' ? theme.colors.blue[5] : theme.colors.red[7],
        fontSize: theme.fontSizes.lg,
        fontWeight: 500,

        '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        },

        [theme.fn.smallerThan('sm')]: {
            borderRadius: 0,
            padding: theme.spacing.md,
        },
    },

    linkActive: {
        '&, &:hover': {
            backgroundColor:
                theme.colorScheme === 'dark'
                    ? theme.fn.rgba(theme.colors[theme.primaryColor][9], 0.25)
                    : theme.colors[theme.primaryColor][0],
            color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 3 : 7],
        },
    },

    linkLabel: {
        marginRight: 5,
    },

}));


export function HeaderWithMenu() {

    const links = [
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
            "link": "/sign-in",
            "label": "Sign In"
        },
        {
            "link": "/sign-up",
            "label": "Register"
        },

    ];

    const [opened, toggleOpened] = useBooleanToggle(false);
    const [active, setActive] = useState(links[0].link);
    const {classes, cx} = useStyles();


    const itemsWM = links.map((link) => {
        const menuItems = link.links?.map((item) => (
            <Menu.Item key={item.link}>{item.label}</Menu.Item>
        ));

        if (menuItems) {
            return (
                <Menu
                    key={link.label}
                    trigger="hover"
                    delay={0}
                    transitionDuration={0}
                    placement="end"
                    gutter={1}
                    control={
                        <a
                            href={link.link}
                            className={classes.link}
                            // onClick={(event) => event.preventDefault()}
                        >
                            <Center>
                                <span className={classes.linkLabel}>{link.label}</span>
                                <ChevronDown size={12} />
                            </Center>
                        </a>
                    }
                >
                    {menuItems}
                </Menu>
            );
        }
        return (
            <a
                key={link.label}
                href={link.link}
                className={classes.link}
            >
                {link.label}
            </a>
        );
    });



    return (
        <Header height={HEADER_HEIGHT} mb={0} className={classes.root}>
            <Container className={classes.header}>
                <img src={HomePantry} alt="HomePantry.png" height="94"/>
                <Group spacing={5} className={classes.links}>
                    {itemsWM}
                </Group>

                <Burger
                    opened={opened}
                    onClick={() => toggleOpened()}
                    className={classes.burger}
                    size="sm"
                />

                <Transition transition="pop-top-right" duration={200} mounted={opened}>
                    {(styles) => (
                        <Paper className={classes.dropdown} withBorder style={styles}>
                            {itemsWM}
                        </Paper>
                    )}
                </Transition>
            </Container>
        </Header>
    );
}