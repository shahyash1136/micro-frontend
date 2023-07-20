import React, { useEffect, useState } from "react";
import { createRoot } from 'react-dom/client';
//import ReactDOM from "react-dom";
import { Avatar, Box, CircularProgress, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import { PermIdentity } from "@mui/icons-material";
import Header from 'home/Header';
import Footer from 'home/Footer';
import { StoreProvider, useStore } from "store/store";

import "home/AppCSS";

const App = () => {
  const { pokemonList, fetchPokemonList } = useStore();

  useEffect(() => {
    fetchPokemonList();
  }, [])


  console.log(pokemonList)
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
            <List dense sx={{ width: '100%', bgcolor: 'background.paper' }}>
              {
                pokemonList?.pokemonList?.map((el: any) => {
                  return (
                    <>
                      <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                          <Avatar>
                            <PermIdentity />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={el.name} />
                      </ListItem>
                      <Divider component="li" />
                    </>
                  )
                })
              }
            </List>
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
