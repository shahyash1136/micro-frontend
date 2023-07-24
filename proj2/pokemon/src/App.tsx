import React from "react";
import { createRoot } from 'react-dom/client';
import Header from "home/Header";
import Footer from "home/Footer";
import { StoreProvider, useStore } from "store/store";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import PokemonDetails from "./Components/PokemonDetails/PokemonDetails";
import "home/AppCSS";

const App = () => {

  return (
    <BrowserRouter>
      <Header />
      <div className="app__container">
        <Routes>
          <Route path="/pokemon/:id" element={<PokemonDetails />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}
const container = document.getElementById('app');
const root = createRoot(container);
root.render(
  <StoreProvider>
    <App />
  </StoreProvider>
);
