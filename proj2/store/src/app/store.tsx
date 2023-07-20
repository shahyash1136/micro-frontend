import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { ReactElement, ReactPortal } from 'react';
import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { pokemonListSlice, fetchPokemonList } from '../features/pokemon/pokemonListSlice';

const store = configureStore({
    reducer: {
        pokemonList: pokemonListSlice.reducer
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export function useStore() {
    const pokemonList = useAppSelector(state => state.pokemonList);
    const dispatch = useAppDispatch();
    return {
        pokemonList,
        fetchPokemonList: () => dispatch(fetchPokemonList()),
    };
}

type ReactText = string | number;
type ReactChild = ReactElement | ReactText;

interface ReactNodeArray extends Array<ReactNode> { }
type ReactFragment = {} | ReactNodeArray;
type ReactNode = ReactChild | ReactFragment | ReactPortal | boolean | null | undefined;

type Props = {
    children: ReactNode
}

export const StoreProvider = ({ children }: any) => {
    return <Provider store={store}> {children} </Provider>;
}