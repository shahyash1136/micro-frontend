import React from 'react'
import { Paper, CardContent, CardMedia, Typography, useTheme } from '@mui/material';
import { pokemonNumFinder } from 'store/common';
import { Link, useNavigate } from 'react-router-dom';


const PokemonCard = (props: any) => {
    const { data } = props;
    const theme = useTheme();
    const navigate = useNavigate();

    const navigationHandler = (id: number) => {
        navigate(`/pokemon/${id}`)
    }

    return (
        <Paper sx={{ cursor: 'pointer' }} elevation={2} onClick={() => navigationHandler(pokemonNumFinder(data.url))}>

            <CardMedia
                component="img"
                sx={{ objectFit: 'contain', backgroundColor: theme.palette.grey[100], padding: '8px 0' }}
                alt={data.name}
                width='auto'
                height="140"
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonNumFinder(data.url)}.svg`}
            />
            <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography variant="h5" component="div" sx={{ textTransform: "capitalize" }}>
                    {data.name}
                </Typography>
                <Typography variant='h5' component="div">
                    #{pokemonNumFinder(data.url)}
                </Typography>
            </CardContent>
        </Paper>
    )
}

export default PokemonCard