import React from 'react';
import { ListItem, ListItemButton, ListItemText, Divider, ListItemAvatar, Avatar, useTheme } from '@mui/material';
import { pokemonNumFinder } from 'store/common';
import { useStore } from "store/store";
import { useNavigate } from 'react-router-dom';

const PokemonList = (props: any) => {
    const { data, setShowSuggestion } = props;
    const { searchValueHandler } = useStore();

    const theme = useTheme();
    const navigate = useNavigate();

    const toggleSuggestionHandler = (id: number) => {
        navigate(`/pokemon/${id}`)
        setShowSuggestion(false);
        searchValueHandler('')
    }

    return (
        <>
            <ListItem disablePadding>
                <ListItemButton onClick={() => toggleSuggestionHandler(pokemonNumFinder(data.url))}>
                    <ListItemAvatar sx={{ mr: 2 }}>
                        <Avatar
                            sx={{ width: 40, height: 40, objectFit: 'contain', backgroundColor: theme.palette.grey[100], padding: '8px', color: theme.palette.text.primary }}
                            alt={`${data.name}`}
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonNumFinder(data.url)}.svg`}
                        />
                    </ListItemAvatar>
                    <ListItemText sx={{ textTransform: 'capitalize', color: theme.palette.text.primary }} primary={`${data.name}`} secondary={`#${pokemonNumFinder(data.url)}`} />
                </ListItemButton>
            </ListItem>
            <Divider />
        </>
    );
}

export default PokemonList;
