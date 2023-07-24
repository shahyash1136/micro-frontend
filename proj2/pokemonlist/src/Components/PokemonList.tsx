import React, { useEffect } from 'react';
import { Box, CircularProgress, Grid } from "@mui/material";
import { useStore } from "store/store";
import PokemonCard from "./PokemonCard";


const PokemonList = () => {
    const { pokemonList, fetchPokemonList } = useStore();

    useEffect(() => {
        fetchPokemonList();
    }, [])
    return (
        <>
            {
                pokemonList?.loading ?
                    <Box sx={{ display: 'flex' }}>
                        <CircularProgress />
                    </Box>
                    :
                    <Grid
                        container
                        spacing={2}
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                    >
                        {
                            pokemonList.pokemonList.map((el: any) => {
                                return (<Grid item xs={2} sm={3} md={3} key={el.name} >
                                    <PokemonCard data={el} />
                                </Grid>)
                            })
                        }
                    </Grid>
            }

        </>
    )
}

export default PokemonList