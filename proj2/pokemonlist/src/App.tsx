import React, { useEffect } from "react";
import { createRoot } from 'react-dom/client';
import { Box, CircularProgress, Grid } from "@mui/material";
import Header from 'home/Header';
import Footer from 'home/Footer';
import { StoreProvider, useStore } from "store/store";
import "home/AppCSS";
import PokemonCard from "./Components/PokemonCard";

const App = () => {
  const { pokemonList, fetchPokemonList } = useStore();

  useEffect(() => {
    fetchPokemonList();
  }, [])
  return (
    <>
      <Header />
      <div className="app__container">
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
      </div>
      <Footer />
    </>
  )
};

const container = document.getElementById('app');
const root = createRoot(container);
root.render(
  <StoreProvider>
    <App />
  </StoreProvider>
);
