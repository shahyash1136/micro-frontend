import React from 'react'
import { Button, Paper, CardActions, CardContent, CardMedia, Typography, useTheme } from '@mui/material'

const PokemonCard = (props: any) => {
    const { data } = props;
    const theme = useTheme();

    let pokemonUrl = data.url;
    let pokemonNum = pokemonUrl.split('/')[pokemonUrl.split('/').length - 2];


    return (
        <Paper sx={{ cursor: 'pointer' }} elevation={2} onClick={() => console.log(data.name)}>
            <CardMedia
                component="img"
                sx={{ objectFit: 'contain', backgroundColor: theme.palette.grey[100], padding: '8px 0' }}
                alt={data.name}
                width='auto'
                height="140"
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonNum}.svg`}
            />
            <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography variant="h5" component="div" sx={{ textTransform: "capitalize" }}>
                    {data.name}
                </Typography>
                <Typography variant='h5' component="div">
                    #{pokemonNum}
                </Typography>
            </CardContent>
        </Paper>
    )
}

export default PokemonCard