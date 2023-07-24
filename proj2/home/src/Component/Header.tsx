import React, { useEffect, useState } from 'react'
import { styled, alpha } from '@mui/material/styles'
import { AppBar, Box, IconButton, InputBase, List, Paper, Toolbar, Typography } from '@mui/material';
import { MenuOutlined, SearchOutlined } from '@mui/icons-material';
import { useStore } from "store/store";
import PokemonList from './PokemonList';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        //transition: theme.transitions.create('width'),
        width: '100%',
        /* [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        }, */
    },
}));

const Header = () => {
    const { searchValueHandler, search, pokemonList, fetchPokemonList } = useStore();

    const [showSuggestion, setShowSuggestion] = useState<boolean>(false);

    useEffect(() => {
        if (pokemonList.pokemonList.length === 0) {
            fetchPokemonList()
        }
    }, [])


    const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        searchValueHandler(e.target.value);
        if (e.target.value.length >= 2) {
            setShowSuggestion(true)
        } else {
            setShowSuggestion(false)
        }
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        MUI
                    </Typography>
                    <Search sx={{ position: 'relative' }}>
                        <SearchIconWrapper>
                            <SearchOutlined />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                            value={search.searchValue}
                            onChange={searchHandler}
                        />
                        {
                            showSuggestion &&
                            <Paper elevation={2} sx={{ width: '100%', bgcolor: 'background.paper', maxHeight: 350, overflow: 'auto', position: 'absolute' }}>
                                <List>
                                    {
                                        pokemonList.pokemonList.filter((el: any) => el.name.toLowerCase().includes(search.searchValue)).map((el: any) => {
                                            return (
                                                <PokemonList data={el} key={el.name} setShowSuggestion={setShowSuggestion} />
                                            )
                                        })
                                    }
                                </List>
                            </Paper>
                        }
                    </Search>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header