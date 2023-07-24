import React from "react";
import { createRoot } from 'react-dom/client';
import { StoreProvider } from 'store/store';
import Header from 'home/Header';
import Footer from 'home/Footer';
import "home/AppCSS";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PokemonList from "pokemonlist/PokemonList";
import PokemonDetails from 'pokemon/PokemonDetails';


const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="app__container">
        <Routes>
          <Route path='/' element={<PokemonList />} />
          <Route path="/pokemon/:id" element={<PokemonDetails />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
};

const container = document.getElementById('app');
const root = createRoot(container);
root.render(
  <StoreProvider>
    <App />
  </StoreProvider>
);
