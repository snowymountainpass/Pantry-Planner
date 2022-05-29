import React from 'react';
import { TextInput, TextInputProps, ActionIcon, useMantineTheme } from '@mantine/core';
import { Search, ArrowRight, ArrowLeft } from 'tabler-icons-react';

export function SearchInput(props: TextInputProps) {
    const theme = useMantineTheme();

    return (
        <TextInput
            icon={<Search size={20} />}
            radius="xl"
            // size="md"
            size="xl"
            rightSection={
                <ActionIcon size={32} radius="xl" color={theme.primaryColor} variant="filled">
                    {theme.dir === 'ltr' ? <ArrowRight size={18} /> : <ArrowLeft size={18} />}
                </ActionIcon>
            }
            placeholder="Find Recipe or Search Pantry"
            rightSectionWidth={42}
            {...props}
        />
    );
}