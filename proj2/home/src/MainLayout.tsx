import React, { useEffect } from 'react';
import Footer from "home/Footer";
import Header from "home/Header";
import Pokemon from 'pokemonlist/Pokemon';
import PokemonDetails from 'pokemon/PokemonDetails';
import { StoreProvider, useStore } from "store/store";
import "home/AppCSS";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function MainLayout() {
    const { fetchPokemonList } = useStore();

    useEffect(() => {
        fetchPokemonList();
    }, [])
    return (

        <BrowserRouter>
            <Header />
            <div className="app__container">
                <Routes>
                    <Route path='/' element={<Pokemon />} />
                    <Route path="/pokemon/:id" element={<PokemonDetails />} />
                </Routes>
            </div>
            <Footer />
        </BrowserRouter>

    )
};