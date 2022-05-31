import React, { useRef, useState } from 'react';
import {Group, ActionIcon, CloseButton, Center, MediaQuery, TextInput, createStyles} from '@mantine/core';


export function CounterInput() {
    const [value, setValue] = useState(0);

    return (
        <Center>
            <Group spacing={9}>
                <ActionIcon size={42} variant="filled" color={"red"} onClick={() => console.log("decrease")}>
                    –
                </ActionIcon>

                <ActionIcon size={42} variant="filled" color={"teal"} onClick={() => console.log("increase")}>
                    +
                </ActionIcon>

                <CloseButton title="Close popover" size={42} iconSize={20} onClick={() => console.log("remove")}/>
            </Group>
        </Center>

    );
}

// <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
//     <TextInput size="xl" />
// </MediaQuery>
//
// <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
//     <TextInput size="md" />
// </MediaQuery>

// <Center>
//     <Group spacing={9}>
//         <ActionIcon size={42} variant="filled" color={"red"} onClick={() => console.log("decrease")}>
//             –
//         </ActionIcon>
//
//         <ActionIcon size={42} variant="filled" color={"teal"} onClick={() => console.log("increase")}>
//             +
//         </ActionIcon>
//
//         <CloseButton title="Close popover" size={42} iconSize={20} onClick={() => console.log("remove")}/>
//     </Group>
// </Center>